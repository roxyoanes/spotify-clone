import { FC } from "react";
import StyledArtistInfo from "../styles/YourLibrary/artistInfo";

interface IProps {
  artistInfo: any; //change this
}

const ArtistInfo: FC<IProps> = ({ artistInfo }) => {
  console.log("ff", artistInfo);

  return (
    <StyledArtistInfo>
      <div className="artist-header">
        <img
          src={artistInfo.images[0].url}
          alt="artist-pic"
          className="img-artist"
        />
        <div className="text-card">
          <p>Verified Artist</p>
          <h4 className="artist-name">{artistInfo.name}</h4>
        </div>
      </div>
    </StyledArtistInfo>
  );
};

export default ArtistInfo;
