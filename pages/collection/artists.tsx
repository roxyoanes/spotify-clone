import styled from "@emotion/styled";

import { IProfileData, IFollowedArtists } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import ArtistsCard from "../../src/YourLibrary/ArtistsCard";
import { server } from "../../config";

interface IStyledProps {
  opensidebar: boolean;
  artistsData: IFollowedArtists;
}
interface IProps {
  profileData: IProfileData;
  artistsData: IFollowedArtists;
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

const Artists: NextPage<IProps> = ({ profileData, artistsData }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <StyledContainer opensidebar={openSidebar} artistsData={artistsData}>
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer
        opensidebar={openSidebar}
        artistsData={artistsData}
      >
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          libraryMenu={true}
          navbarDefault={false}
          navbarDefaultScrolled={false}
        />
        <ArtistsCard artistsData={artistsData} />
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

Artists.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  const artistsResponse = await fetch(
    `${server}/api/savedArtists/getFollowedArtists`
  );
  const artistsData = await artistsResponse.json();

  return {
    profileData: store.profile,
    ...artistsData,
  };
};
export default withRedux(Artists);
