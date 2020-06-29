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
    opensidebar === true ? "2fr 8fr" : "1fr"};
`;

const Home = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

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

    return { newReleases };
  }
};

export default withRedux(Home);
