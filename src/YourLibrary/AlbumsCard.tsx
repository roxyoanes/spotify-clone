import { NextPage } from "next";

import StyledAlbums from "../styles/YourLibrary/albums";

interface IProps {
  savedAlbums: any;
}

const AlbumsCard: NextPage<IProps> = ({ savedAlbums }) => {
  console.log("dd", savedAlbums);
  return (
    <StyledAlbums>
      <div className="container">
        <h1 className="card-title">Albums</h1>
        <div className="albums-wrapper">
          {savedAlbums.items.map((savedAlbum) => (
            <div className="card" key={savedAlbum.id}>
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
          ))}
        </div>
      </div>
    </StyledAlbums>
  );
};

export default AlbumsCard;
