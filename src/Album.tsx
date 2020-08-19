import { NextPage } from "next";
import { IGetAlbum } from "./types";

import { useState } from "react";
import StyledAlbum from "./styles/album";

interface IProps {
  albumData: IGetAlbum;
}

const Album: NextPage<IProps> = ({ albumData }) => {
  const [openPlaylistMenu, setOpenPlaylistMenu] = useState(false);
  console.log("album", albumData);

  const togglePlaylistMenu = () => {
    setOpenPlaylistMenu(!openPlaylistMenu);
  };

  return (
    <StyledAlbum>
      <div className="container">
        <div className="album-main">
          <img
            className="album-pic"
            src={albumData.images[0].url}
            alt="album-pic"
          />
          <div className="text-card">
            <h5 className="album-type">{albumData.album_type}</h5>
            <h1 className="name">{albumData.name}</h1>

            {albumData.artists.map((artist) => (
              <p className="info-artist" key={artist.id}>
                {artist.name}
              </p>
            ))}
            <p>{albumData.release_date}</p>
          </div>
        </div>
      </div>
    </StyledAlbum>
  );
};

export default Album;
