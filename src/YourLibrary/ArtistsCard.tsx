import { NextPage } from "next";

import StyledAlbum from "../styles/album";
import { IFollowedArtists } from "../types";

interface IProps {
  followedArtists: IFollowedArtists;
}

const ArtistsCard: NextPage<IProps> = ({ followedArtists }) => {
  console.log("sss", followedArtists);
  return (
    <StyledAlbum>
      <div className="container">
        <div className="artists-main">
          <h1>Artists</h1>
        </div>
      </div>
    </StyledAlbum>
  );
};

export default ArtistsCard;
