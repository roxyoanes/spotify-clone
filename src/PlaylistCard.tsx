import { FC } from "react";
import Link from "next/link";

import { IPlaylist } from "./types";

interface IProps {
  category: IPlaylist[];
}

const PlaylistCard: FC<IProps> = ({ category }) => {
  return (
    <>
      {category.map((playlist) => (
        <Link
          href="/playlist/[playlistId]"
          as={`/playlist/${playlist.id}`}
          key={playlist.id}
        >
          <div className="card">
            <img
              className="card-img"
              src={playlist.images[0].url}
              alt="category-img"
            />
            <div className="text-wrapper">
              <h5 className="playlist-name">{playlist.name}</h5>
              <p className="description">{playlist.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PlaylistCard;
