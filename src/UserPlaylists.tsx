import { FC } from "react";
import { IUserPlaylists } from "./types";

interface IProps {
  userPlaylists: IUserPlaylists;
}

const UserPlaylists: FC<IProps> = ({ userPlaylists }) => {
  return (
    <>
      {userPlaylists.items.map((playlistName) => (
        <div className="card" key={playlistName.id}>
          <img className="card-img" src={playlistName.images[0]?.url} />
          <div>
            <h4 className="playlist-name">{playlistName.name}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserPlaylists;
