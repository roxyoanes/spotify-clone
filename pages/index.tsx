import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { NextPage } from "next";

import Sidebar from "../src/Sidebar";
import Playlists from "../src/Playlists";
import { spotifyApi } from "../src/server/spotifyApi";
import { withRedux, IReduxStoreProps } from "../src/redux/redux";
import Navbar from "../src/Navbar";
import { IAlbum, IPlaylist, IProfileData } from "../src/types";
import { useSelector } from "react-redux";
import { setProfileDataAction } from "../src/redux/actions";

interface IStyledProps {
  opensidebar: boolean;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "260px 1fr" : "1fr"};
  overflow-y: hidden;
  background-color: #131413;
`;

interface IProps {
  newReleases: IAlbum[];
  playlists: IPlaylists;
  profileData: IProfileData;
}

const Home: NextPage<IProps> = ({ profileData, newReleases, playlists }) => {
  const dispatch = useDispatch();
  const [openSidebar, setOpenSidebar] = useState(false);
  const token = useSelector((state) => state.spotify.access_token);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  useEffect(() => {
    dispatch(setProfileDataAction(profileData));
  }, []);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} profileData={profileData} />
      <StyledContainer opensidebar={openSidebar}>
        <Sidebar openSidebar={openSidebar} />
        {token ? (
          <Playlists newReleases={newReleases} playlists={playlists} />
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
      </StyledContainer>
    </>
  );
};

interface IPlaylists {
  [key: string]: IPlaylist[];
}

Home.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  if (store.spotify.access_token) {
    spotifyApi.setAccessToken(store.spotify.access_token);
    const releasesList = await spotifyApi.getNewReleases({
      limit: 5,
      offset: 0,
      country: "ES",
    });
    const data = await spotifyApi.getNewReleases([
      releasesList.body.albums.items.map((el) => el.id),
    ]);
    const newReleases: IAlbum[] = data.body.albums.items.slice(0, 5);

    const playlists: IPlaylists = {};

    const category = await spotifyApi.getPlaylistsForCategory("party", {
      limit: 5,
      offset: 0,
    });
    playlists.Party = category.body.playlists.items;

    const featured = await spotifyApi.getFeaturedPlaylists({
      limit: 5,
      offset: 1,
    });
    playlists.Featured = featured.body.playlists.items;

    const chillPlaylist = await spotifyApi.getPlaylistsForCategory("chill", {
      limit: 5,
      offset: 0,
    });
    playlists.Chill = chillPlaylist.body.playlists.items;

    const hipHopPlaylist = await spotifyApi.getPlaylistsForCategory("hiphop", {
      limit: 5,
      offset: 0,
    });
    playlists.HipHop = hipHopPlaylist.body.playlists.items;

    const popPlaylist = await spotifyApi.getPlaylistsForCategory("pop", {
      limit: 5,
      offset: 0,
    });
    playlists.Pop = popPlaylist.body.playlists.items;

    const workout = await spotifyApi.getPlaylistsForCategory("workout", {
      limit: 5,
      offset: 0,
    });
    playlists.Workout = workout.body.playlists.items;

    const profileData = await spotifyApi.getMe();
    return {
      newReleases,
      playlists,
      profileData: profileData.body,
    };
  }
};

export default withRedux(Home);
