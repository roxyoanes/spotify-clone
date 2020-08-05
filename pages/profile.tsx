import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import Sidebar from "../src/Sidebar";
import UserProfile from "../src/UserProfile";
import Navbar from "../src/Navbar";
import { withRedux, IReduxStoreProps } from "../src/redux/redux";
import { IProfileData, IUserPlaylists } from "../src/types";
import { NextPage } from "next";
import { spotifyApi } from "../src/server/spotifyApi";
import toggleSidebarHook from "../src/toggleSidebarHook";

interface IStyledProps {
  opensidebar: boolean;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "260px 8fr" : "1fr"};
`;

interface IProps {
  profileData: IProfileData;
  userPlaylists: IUserPlaylists;
}

const Profile: NextPage<IProps> = ({ profileData, userPlaylists }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <>
      <Navbar profileData={profileData} toggleSidebar={toggleSidebar} />
      <StyledContainer opensidebar={openSidebar}>
        <Sidebar openSidebar={openSidebar} />
        <UserProfile profileData={profileData} userPlaylists={userPlaylists} />

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
      </StyledContainer>
    </>
  );
};

Profile.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();
  const name = store.profile.display_name;

  const userPlaylists = await spotifyApi.getUserPlaylists({ name });
  console.log("rrr", userPlaylists.body);
  return {
    profileData: store.profile,
    userPlaylists: userPlaylists.body,
  };
};

export default withRedux(Profile);
