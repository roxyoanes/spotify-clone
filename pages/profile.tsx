import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import Sidebar from "../src/Sidebar";
import UserProfile from "../src/UserProfile";
import Navbar from "../src/Navbar";
import { withRedux, IReduxStoreProps } from "../src/redux/redux";
import { IProfileData, IUserPlaylists } from "../src/types";
import { NextPage } from "next";
import spotifyApi from "../src/server/spotifyApi";
import toggleSidebarHook from "../src/toggleSidebarHook";

interface IStyledProps {
  opensidebar: boolean;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
  background: #131413;
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  display: grid;
  background-color: linear-gradient(#212121, #131413);
`;

interface IProps {
  profileData: IProfileData;
  userPlaylists: IUserPlaylists;
}

const Profile: NextPage<IProps> = ({ profileData, userPlaylists }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} />
      <>
        <StyledRightSideContainer opensidebar={openSidebar}>
          <Navbar
            openSidebar={openSidebar}
            profileData={profileData}
            toggleSidebar={toggleSidebar}
            profileUserName={true}
            navbarDefault={true}
            navbarDefaultScrolled={false}
          />

          <UserProfile
            profileData={profileData}
            userPlaylists={userPlaylists}
          />

          <Global
            styles={css`
              html,
              body {
                padding: 0;
                margin: 0 !important;
                font-family: "arial", sans-serif;
              }
              a {
                text-decoration: none;
                cursor: pointer;
                color: #b3b3b3;
                &:hover {
                  color: #fff;
                }
              }
            `}
          />
        </StyledRightSideContainer>
      </>
    </StyledContainer>
  );
};

Profile.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();
  const name = store.profile.display_name;

  const userPlaylists = await spotifyApi.getUserPlaylists({ name });
  return {
    profileData: store.profile,
    userPlaylists: userPlaylists.body,
  };
};

export default withRedux(Profile);
