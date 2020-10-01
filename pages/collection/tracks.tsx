import styled from "@emotion/styled";

import { IProfileData, ISavedTracks } from "../../src/types";
import { NextPage } from "next";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { withRedux, IReduxStoreProps } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import LikedTracksCard from "../../src/YourLibrary/LikedTracksCard";
import LikedTracksHeader from "../../src/YourLibrary/LikedTracksHeader";
import { server } from "../../config";
import toggleSongMenuHook from "../../src/toggleSongMenuHook";

interface IStyledProps {
  opensidebar: boolean;
  savedTracksData: ISavedTracks;
}
interface IProps {
  profileData: IProfileData;
  savedTracksData: ISavedTracks;
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
  background: black;
`;
const StyledSecondaryBackground = styled.div<IStyledProps>`
  background: linear-gradient(
    to bottom,
    rgb(70, 62, 118, 0.9),
    rgb(70, 62, 118, 0.7),
    rgb(70, 62, 118, 0.5)
  );
`;

const LikedTracks: NextPage<IProps> = ({ profileData, savedTracksData }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();

  return (
    <StyledContainer
      opensidebar={openSidebar}
      savedTracksData={savedTracksData}
    >
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer
        opensidebar={openSidebar}
        savedTracksData={savedTracksData}
      >
        <StyledBackground
          opensidebar={openSidebar}
          savedTracksData={savedTracksData}
        >
          <StyledSecondaryBackground
            opensidebar={openSidebar}
            savedTracksData={savedTracksData}
          >
            <Navbar
              openSidebar={openSidebar}
              toggleSidebar={toggleSidebar}
              profileData={profileData}
              likedTracks={true}
              navbarDefault={true}
              navbarDefaultScrolled={false}
            />
            <LikedTracksHeader profileData={profileData} />
          </StyledSecondaryBackground>
        </StyledBackground>
        <LikedTracksCard
          savedTracksData={savedTracksData}
          profileData={profileData}
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

LikedTracks.getInitialProps = async ({ reduxStore }: IReduxStoreProps) => {
  const store = reduxStore.getState();

  const tracksResponse = await fetch(
    `${server}/api/savedTracks/getSavedTracks`
  );
  const savedTracksData = await tracksResponse.json();
  return {
    profileData: store.profile,
    ...savedTracksData,
  };
};
export default withRedux(LikedTracks);
