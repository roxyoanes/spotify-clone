import { NextPage } from "next";

import StyledAlbum from "../styles/album";

interface IProps {}

const PodcastsCard: NextPage<IProps> = () => {
  return (
    <StyledAlbum>
      <div className="container">
        <div className="podcasts-main">
          <h1>Podcasts</h1>
        </div>
      </div>
    </StyledAlbum>
  );
};

export default PodcastsCard;
