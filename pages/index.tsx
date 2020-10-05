import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { useState } from "react";

import Sidebar from "../src/Sidebar";
import Categories from "../src/Categories";
import { withRedux } from "../src/redux/redux";
import Navbar from "../src/Navbar";
import { IAlbum, IPlaylist, IProfileData } from "../src/types";
import { setProfileDataAction, setLoginAction } from "../src/redux/actions";
import toggleSidebarHook from "../src/toggleSidebarHook";
import toggleSongMenuHook from "../src/toggleSongMenuHook";

import CreatePlaylist from "../src/CreatePlaylist";
import { server } from "../config";

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
  overflow-y: hidden;
  padding-bottom: 40px;
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  display: grid;
`;

interface IPlaylists {
  [key: string]: IPlaylist[];
}

interface IProps {
  newReleases: IAlbum[];
  playlists: IPlaylists;
  profileData: IProfileData;
  isLoggedIn?: boolean;
}

const Home: NextPage<IProps> = ({
  profileData,
  newReleases,
  playlists,
  isLoggedIn,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  const dispatch = useDispatch();

  const { toggleSidebar, openSidebar } = toggleSidebarHook();
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();

  useEffect(() => {
    dispatch(setProfileDataAction(profileData));
    dispatch(setLoginAction(isLoggedIn));
  }, []);

  const toggleModal = () => {
    setIsShowing(!isShowing);
  };

  const convertMilliseconds = (milliseconds) => {
    const min = Math.floor((milliseconds / 1000 / 60) << 0);
    const sec = Math.floor((milliseconds / 1000) % 60);
    const res = min + ":" + sec;
    return res;
  };

  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} toggleModal={toggleModal} />
      <StyledRightSideContainer opensidebar={openSidebar}>
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          navbarDefault={true}
          navbarDefaultScrolled={true}
        />

        {isLoggedIn ? (
          <Categories newReleases={newReleases} playlists={playlists} />
        ) : null}
        {isShowing ? (
          <CreatePlaylist userId={profileData.id} toggleModal={toggleModal} />
        ) : null}
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

Home.getInitialProps = async () => {
  const playlistsResponse = await fetch(`${server}/api/getPlaylists`);
  const playlistsData = await playlistsResponse.json();

  const profileResponse = await fetch(`${server}/api/getProfileData`);
  const profileData = await profileResponse.json();

  return {
    ...playlistsData,
    ...profileData,
  };
};

export default withRedux(Home);
