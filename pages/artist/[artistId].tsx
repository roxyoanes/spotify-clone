import styled from "@emotion/styled";

import {
  IAlbum,
  IArtistInfo,
  IGetUserAlbums,
  IProfileData,
  IRelatedTracks,
} from "../../src/types";
import { NextPage } from "next";
import ArtistInfo from "../../src/YourLibrary/ArtistInfo";
import PopularTracks from "../../src/YourLibrary/PopularTracks";
import toggleSidebarHook from "../../src/toggleSidebarHook";
import Sidebar from "../../src/Sidebar";
import Navbar from "../../src/Navbar";
import { IReduxStoreProps, withRedux } from "../../src/redux/redux";
import { Global, css } from "@emotion/core";
import { server } from "../../config";
import ArtistAlbums from "../../src/YourLibrary/ArtistAlbums";
import RelatedArtists from "../../src/YourLibrary/RelatedArtists";

interface IStyledProps {
  opensidebar: boolean;
  artistInfo: IArtistInfo;
}
interface IProps {
  artistInfo: IArtistInfo;
  profileData: IProfileData;
  artistTracks: any; //change
  artistAlbums: IAlbum;
  relatedArtists: IRelatedTracks;
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
`;

const StyledPopularTracksContainer = styled.div<IStyledProps>`
  color: white;
  padding: 20px 30px;
`;

const ArtistId: NextPage<IProps> = ({
  profileData,
  artistInfo,
  artistTracks,
  artistAlbums,
  relatedArtists,
}) => {
  const { toggleSidebar, openSidebar } = toggleSidebarHook();
  console.log("ddd", artistTracks);

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
        <StyledPopularTracksContainer>
          <ArtistInfo
            artistInfo={artistInfo}
            convertMilliseconds={convertMilliseconds}
          />
          <PopularTracks artistTracks={artistTracks} />
          <ArtistAlbums artistAlbums={artistAlbums} />
          <RelatedArtists relatedArtists={relatedArtists} />
        </StyledPopularTracksContainer>
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

  const artistData = await fetch(`${server}/api/get-top-tracks/${artistId}`);
  const artistTracks = await artistData.json();

  const artistAlbumData = await fetch(
    `${server}/api/get-artist-albums/${artistId}`
  );
  const artistAlbums = await artistAlbumData.json();

  const relatedArtistsData = await fetch(
    `${server}/api/get-related-artists/${artistId}`
  );
  const relatedArtists = await relatedArtistsData.json();

  return {
    profileData: store.profile,
    ...artistInfo,
    ...artistTracks,
    ...artistAlbums,
    ...relatedArtists,
  };
};
export default withRedux(ArtistId);
