import { FC } from "react";
import StyledArtistInfo from "../styles/YourLibrary/artistInfo";

interface IProps {}

const PopularTracks: FC<IProps> = ({}) => {
  return (
    <StyledArtistInfo>
      <div className="popular-tracks-card">
        <p>Popular</p>
      </div>
    </StyledArtistInfo>
  );
};

export default PopularTracks;
