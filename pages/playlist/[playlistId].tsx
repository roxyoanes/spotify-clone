import styled from "@emotion/styled";

import { IProfileData, IGetPlaylist } from "../../src/types";
import { NextPage } from "next";
import Playlist from "../../src/Playlist";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { IReduxStoreProps, withRedux } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import { server } from "../../config";

interface IStyledProps {
  opensidebar: boolean;
}
interface IProps {
  playlistData: IGetPlaylist;
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

const PlaylistId: NextPage<IProps> = ({ profileData, playlistData }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  const convertMilliseconds = (milliseconds) => {
    const min = Math.floor((milliseconds / 1000 / 60) << 0);
    const sec = Math.floor((milliseconds / 1000) % 60);
    const res = min + ":" + sec;
    return res;
  };

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
        <Playlist
          playlist={playlistData}
          convertMilliseconds={convertMilliseconds}
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

  const playlistResponse = await fetch(`${server}/api/playlist/${playlistId}`);
  const playlistData = await playlistResponse.json();

  return {
    profileData: store.profile,
    ...playlistData,
  };
};
export default withRedux(PlaylistId);
