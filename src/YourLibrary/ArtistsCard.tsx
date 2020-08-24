import { NextPage } from "next";

import StyledAlbum from "../styles/album";

interface IProps {}

const ArtistsCard: NextPage<IProps> = () => {
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
