import { NextPage } from "next";

import StyledPlaylist from "./styles/playlistsCollection";
import { IUserPlaylists } from "./types";

interface IProps {
  userPlaylists: IUserPlaylists;
}

const Library: NextPage<IProps> = ({ userPlaylists }) => {
  return (
    <StyledPlaylist>
      <div className="container">
        <h1>Playlists</h1>
        <div className="cards-container">
          {userPlaylists.items.map((playlistName) => (
            <div className="card" key={playlistName.id}>
              <img className="card-img" src={playlistName.images[0]?.url} />
              <div>
                <h4 className="playlist-name">{playlistName.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledPlaylist>
  );
};

export default Library;
