import { NextPage } from "next";

import StyledAlbumTracks from "../styles/YourLibrary/albumTracks";
import Link from "next/link";

import { IGetUserAlbums } from "../types";

interface IProps {}

const AlbumTracksCard: NextPage<IProps> = ({ albumTracksData }) => {
  console.log("pp", albumTracksData);
  return (
    <StyledAlbumTracks>
      <div className="container">
        <h1 className="card-title">Tracks</h1>
      </div>
    </StyledAlbumTracks>
  );
};

export default AlbumTracksCard;
