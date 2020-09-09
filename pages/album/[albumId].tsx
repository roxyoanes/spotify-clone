import styled from "@emotion/styled";

import { IProfileData, IGetAlbum } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import Album from "../../src/Album";
import spotifyApi from "../../src/server/spotifyApi";

interface IStyledProps {
  opensidebar: boolean;
}
interface IProps {
  profileData: IProfileData;
  albumData: IGetAlbum;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  /*   display: grid;
 */
  background: linear-gradient(#212121, #131413);
`;

const AlbumId: NextPage<IProps> = ({ profileData, albumData }) => {
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
        <Album albumData={albumData} />
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

AlbumId.getInitialProps = async ({ query, reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  const { albumId } = query;
  const albumData = await spotifyApi.getAlbum(albumId);

  return {
    profileData: store.profile,
    albumData: albumData.body,
  };
};
export default withRedux(AlbumId);
