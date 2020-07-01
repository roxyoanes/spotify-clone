import { useState } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import Sidebar from "../src/Sidebar";
import Playlists from "../src/Playlists";
import { spotifyApi } from "../src/server/spotifyApi";
import { withRedux, IReduxStoreProps } from "../src/redux/redux";

interface IStyledProps {
  opensidebar: boolean;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "260px 1fr" : "1fr"};
  overflow-y: auto;
`;

const Home = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log("ggg", props);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} />
      <Playlists toggleSidebar={toggleSidebar} props={props} />

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
  );
};

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
    const newReleases = data.body.albums.items.slice(0, 5);

    const category = await spotifyApi.getPlaylistsForCategory("party", {
      limit: 5,
      offset: 0,
    });
    const categoryParty = category.body.playlists.items;

    const featured = await spotifyApi.getFeaturedPlaylists({
      limit: 5,
      offset: 1,
    });
    const categoryFeatured = featured.body.playlists.items;

    const chillPlaylist = await spotifyApi.getPlaylistsForCategory("chill", {
      limit: 5,
      offset: 0,
    });
    const categoryChill = chillPlaylist.body.playlists.items;

    const hipHopPlaylist = await spotifyApi.getPlaylistsForCategory("hiphop", {
      limit: 5,
      offset: 0,
    });
    const categoryHipHop = hipHopPlaylist.body.playlists.items;
    return {
      newReleases,
      categoryParty,
      categoryFeatured,
      categoryChill,
      categoryHipHop,
    };
  }
};

export default withRedux(Home);
