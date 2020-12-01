import { NextPage } from "next";

import StyledAlbums from "../styles/YourLibrary/albums";
import Link from "next/link";

import { IGetUserAlbums } from "../types";

interface IProps {
  savedAlbumData: IGetUserAlbums;
}

const UserAlbums: NextPage<IProps> = ({ savedAlbumData }) => {
  return (
    <StyledAlbums>
      <div className="container">
        <h1 className="card-title">Albums</h1>
        <div className="albums-wrapper">
          {savedAlbumData.items.map((savedAlbum) => (
            <Link
              href="/album/[albumId]"
              as={`/album/${savedAlbum.album.id}`}
              key={savedAlbum.album.id}
            >
              <div className="card" key={savedAlbum.album.id}>
                <img
                  className="album-pic"
                  src={savedAlbum.album.images[0].url}
                  alt="album-pic"
                />
                <div className="text-card">
                  <h6 className="name">{savedAlbum.album.name}</h6>

                  {savedAlbum.album.artists.map((artist) => (
                    <p className="info-artist" key={artist.id}>
                      {artist.name}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </StyledAlbums>
  );
};

export default UserAlbums;
