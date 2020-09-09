import styled from "@emotion/styled";

import spotifyApi from "../../src/server/spotifyApi";
import { IProfileData, IGetPlaylist } from "../../src/types";
import { NextPage } from "next";
import Playlist from "../../src/Playlist";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { IReduxStoreProps, withRedux } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";

interface IStyledProps {
  opensidebar: boolean;
}
interface IProps {
  playlist: IGetPlaylist;
  profileData: IProfileData;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  display: grid;
  background: linear-gradient(#212121, #131413);
`;

const PlaylistId: NextPage<IProps> = ({ profileData, playlist }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer opensidebar={openSidebar}>
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          navbarDefault={true}
          navbarDefaultScrolled={true}
        />
        <Playlist playlist={playlist} />
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

interface IServerProps extends IReduxStoreProps {
  query: {
    playlistId: string;
  };
}

PlaylistId.getInitialProps = async ({ query, reduxStore }: IServerProps) => {
  const store = reduxStore.getState();

  const { playlistId } = query;
  const playlist = await spotifyApi.getPlaylist(playlistId);

  return {
    profileData: store.profile,
    playlist: playlist.body,
  };
};
export default withRedux(PlaylistId);
