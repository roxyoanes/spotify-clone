import { FC } from "react";

import PlaylistCard from "./PlaylistCard";
import StyledCategories from "./styles/categories";
import { IAlbum, IPlaylist } from "./types";
import AlbumCard from "./AlbumCard";

interface IProps {
  newReleases: IAlbum[];
  playlists: {
    [key: string]: IPlaylist[];
  };
}

const Categories: FC<IProps> = ({ newReleases, playlists }) => {
  return (
    <StyledCategories>
      <div className="playlist-container">
        <div>
          <h4 className="card-title">New Releases</h4>
          <div className="cards-container">
            <AlbumCard newReleases={newReleases} />
          </div>
        </div>

        {Object.keys(playlists).map((playlistCategory) => (
          <div key={playlistCategory}>
            <h4 className="card-title">{playlistCategory}</h4>
            <div className="cards-container">
              <PlaylistCard category={playlists[playlistCategory]} />
            </div>
          </div>
        ))}
      </div>
    </StyledCategories>
  );
};

export default Categories;
