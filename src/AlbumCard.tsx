import { FC } from "react";

import { IAlbum } from "./types";
import Link from "next/link";

interface IProps {
  newReleases: IAlbum[];
}
const AlbumCard: FC<IProps> = ({ newReleases }) => {
  return (
    <>
      {newReleases.map((single) => (
        <Link
          href="/album/[albumId]"
          as={`/album/${single.id}`}
          key={single.id}
        >
          <div className="card" key="obj.name">
            <img
              className="card-img"
              src={single.images[0].url}
              alt="category-img"
            />
            <div className="text-wrapper">
              <h5 className="playlist-name">{single.name}</h5>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default AlbumCard;
