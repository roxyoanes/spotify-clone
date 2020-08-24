import { NextPage } from "next";

import StyledAlbum from "../styles/album";

interface IProps {}

const AlbumsCard: NextPage<IProps> = () => {
  return (
    <StyledAlbum>
      <div className="container">
        <div className="albums-main">
          <h1>Albums</h1>
          {/*  {savedAlbums.items.map((savedAlbum) => (
            <div key={savedAlbum.id}>
              <img
                className="album-pic"
                src={savedAlbum.album.images[0].url}
                alt="album-pic"
              />
              <div className="text-card">
                <h1 className="name">{savedAlbum.name}</h1>

                {savedAlbum.album.artists.map((artist) => (
                  <p className="info-artist" key={artist.id}>
                    {artist.name}
                  </p>
                ))}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </StyledAlbum>
  );
};

export default AlbumsCard;
