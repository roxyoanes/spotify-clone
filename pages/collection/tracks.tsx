import styled from "@emotion/styled";

import { IProfileData, ISavedTracks } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import { spotifyApi } from "../../src/server/spotifyApi";
import LikedTracksCard from "../../src/YourLibrary/LikedTracksCard";
import LikedTracksHeader from "../../src/YourLibrary/LikedTracksHeader";

interface IStyledProps {
  opensidebar: boolean;
  savedTracks: ISavedTracks;
}
interface IProps {
  profileData: IProfileData;
  savedTracks: ISavedTracks;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  display: grid;
`;

const StyledBackground = styled.div<IStyledProps>`
  background-color: rgb(70, 62, 118);
`;

const LikedTracks: NextPage<IProps> = ({ profileData, savedTracks }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  return (
    <StyledContainer opensidebar={openSidebar} savedTracks={savedTracks}>
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer
        opensidebar={openSidebar}
        savedTracks={savedTracks}
      >
        <StyledBackground opensidebar={openSidebar} savedTracks={savedTracks}>
          <Navbar
            openSidebar={openSidebar}
            toggleSidebar={toggleSidebar}
            profileData={profileData}
            likedTracks={true}
            navbarDefault={true}
            navbarDefaultScrolled={false}
          />
          <LikedTracksHeader profileData={profileData} />
        </StyledBackground>
        <LikedTracksCard savedTracks={savedTracks} profileData={profileData} />

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

LikedTracks.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  const savedTracks = await spotifyApi.getMySavedTracks();

  return {
    profileData: store.profile,
    savedTracks: savedTracks.body,
  };
};
export default withRedux(LikedTracks);
