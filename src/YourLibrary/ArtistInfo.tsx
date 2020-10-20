import { FC } from "react";

interface IProps {
  artistData: any;
}

const ArtistInfo: FC<IProps> = ({ artistData }) => {
  console.log("ff", artistData);

  return (
    <div className="card">
      <div className="artist-header">
        <p>Verified Artist</p>
      </div>
    </div>
  );
};

export default ArtistInfo;
