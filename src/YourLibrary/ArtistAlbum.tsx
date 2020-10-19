import { FC } from "react";
import { IUserPlaylists } from "../types";

interface IProps {
  artistAlbumData: IUserPlaylists;
}

const ArtistAlbum: FC<IProps> = ({ artistAlbumData }) => {
  console.log("ff", artistAlbumData);

  return (
    <>
      <div className="card">
        <p>dwwo</p>
      </div>
    </>
  );
};

export default ArtistAlbum;
