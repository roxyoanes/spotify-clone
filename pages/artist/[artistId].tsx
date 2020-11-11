import styled from "@emotion/styled";

import { IProfileData } from "../../src/types";
import { NextPage } from "next";
import ArtistInfo from "../../src/YourLibrary/ArtistInfo";
import PopularTracks from "../../src/YourLibrary/PopularTracks";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { IReduxStoreProps, withRedux } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import { server } from "../../config";

interface IStyledProps {
  opensidebar: boolean;
  artistInfo: any; //change this
}
interface IProps {
  artistInfo: any; //change this
  profileData: IProfileData;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "1fr 4fr" : "1fr"};
`;

const StyledRightSideContainer = styled.div<IStyledProps>`
  display: grid;
  background: linear-gradient(#212121, #131413);
  /* background-image: url(${({ artistInfo }) => artistInfo}); */
  /*   background-position: center center;
  background-repeat: no-repeat; */
`;

const ArtistId: NextPage<IProps> = ({ profileData, artistInfo }) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();

  const convertMilliseconds = (milliseconds) => {
    const min = Math.floor((milliseconds / 1000 / 60) << 0);
    const sec = Math.floor((milliseconds / 1000) % 60);
    const res = min + ":" + sec;
    return res;
  };

  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} />
      <StyledRightSideContainer
        artistInfo={artistInfo.images[0].url}
        opensidebar={openSidebar}
      >
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          profileData={profileData}
          navbarDefault={true}
          navbarDefaultScrolled={true}
        />
        <ArtistInfo
          artistInfo={artistInfo}
          convertMilliseconds={convertMilliseconds}
        />
        <PopularTracks />
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

interface IServerProps extends IReduxStoreProps {
  query: {
    artistId: string;
  };
}

ArtistId.getInitialProps = async ({ query, reduxStore }: IServerProps) => {
  const store = reduxStore.getState();
  const { artistId } = query;

  const artistResponse = await fetch(`${server}/api/savedArtists/${artistId}`);
  const artistInfo = await artistResponse.json();

  return {
    profileData: store.profile,
    ...artistInfo,
  };
};
export default withRedux(ArtistId);
