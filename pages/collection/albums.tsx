import styled from "@emotion/styled";

import { IProfileData, IGetUserAlbums } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import AlbumsCard from "../../src/YourLibrary/AlbumsCard";
import spotifyApi from "../../src/server/spotifyApi";

interface IStyledProps {
  opensidebar: boolean;
  savedAlbums: IGetUserAlbums;
}
interface IProps {
  profileData: IProfileData;
  savedAlbums: IGetUserAlbums;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
  background: #131413;
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  display: grid;
`;

const Albums: NextPage<IProps> = ({ profileData, savedAlbums }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <StyledContainer opensidebar={openSidebar} savedAlbums={savedAlbums}>
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer
        opensidebar={openSidebar}
        savedAlbums={savedAlbums}
      >
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          libraryMenu={true}
          navbarDefault={false}
          navbarDefaultScrolled={false}
        />
        <AlbumsCard savedAlbums={savedAlbums} />
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

Albums.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  const savedAlbums = await spotifyApi.getMySavedAlbums();

  return {
    profileData: store.profile,
    savedAlbums: savedAlbums.body,
  };
};
export default withRedux(Albums);
