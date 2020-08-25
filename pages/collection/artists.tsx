import styled from "@emotion/styled";

import { IProfileData, IFollowedArtists } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import ArtistsCard from "../../src/YourLibrary/ArtistsCard";
import { spotifyApi } from "../../src/server/spotifyApi";

interface IStyledProps {
  opensidebar: boolean;
  followedArtists: IFollowedArtists;
}
interface IProps {
  profileData: IProfileData;
  followedArtists: IFollowedArtists;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  background: linear-gradient(#212121, #131413);
`;

const Artists: NextPage<IProps> = ({ profileData, followedArtists }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <StyledContainer
      opensidebar={openSidebar}
      followedArtists={followedArtists}
    >
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer
        opensidebar={openSidebar}
        followedArtists={followedArtists}
      >
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          libraryMenu={true}
        />
        <ArtistsCard followedArtists={followedArtists} />
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

  const followedArtists = await spotifyApi.getFollowedArtists();

  return {
    profileData: store.profile,
    followedArtists: followedArtists.body,
  };
};
export default withRedux(Artists);
