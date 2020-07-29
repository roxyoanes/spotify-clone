import { FC } from "react";

import Categories from "./Categories";
import StyledPlaylists from "./styles/playlists";
import { IAlbum, IPlaylist } from "./types";
import Album from "./Album";

interface IProps {
  newReleases: IAlbum[];
  playlists: {
    [key: string]: IPlaylist[];
  };
}

const Playlists: FC<IProps> = ({ newReleases, playlists }) => {
  return (
    <StyledPlaylists>
      <div className="playlist-container">
        <div>
          <h4 className="card-title">New Releases</h4>
          <div className="cards-container">
            <Album category={newReleases} />
          </div>
        </div>
        {Object.keys(playlists).map((playlistName) => (
          <div key={playlistName}>
            <h4 className="card-title">{playlistName}</h4>
            <div className="cards-container">
              <Categories category={playlists[playlistName]} />
            </div>
          </div>
        ))}
      </div>
    </StyledPlaylists>
  );
};

export default Playlists;
