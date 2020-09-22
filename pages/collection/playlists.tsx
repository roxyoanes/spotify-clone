import styled from "@emotion/styled";

import { IProfileData, IUserPlaylists } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import Library from "../../src/Library";
import { server } from "../../config";
import toggleSongMenuHook from "../../src/toggleSongMenuHook";

interface IStyledProps {
  opensidebar: boolean;
}
interface IProps {
  profileData: IProfileData;
  userPlaylists: IUserPlaylists;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  background-color: #131413; /* linear-gradient(#212121, #131413); */
`;

const YourLibrary: NextPage<IProps> = ({ profileData, userPlaylists }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();

  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer opensidebar={openSidebar}>
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          libraryMenu={true}
          navbarDefault={false}
          navbarDefaultScrolled={false}
        />
        <Library userPlaylists={userPlaylists} />
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
    </StyledContainer>
  );
};

YourLibrary.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  const userId = store.profile.id;

  const playlistsResponse = await fetch(
    `${server}/api/get-user-playlists/${userId}`
  );
  const userPlaylists = await playlistsResponse.json();

  return {
    ...userPlaylists,
    profileData: store.profile,
  };
};
export default withRedux(YourLibrary);
