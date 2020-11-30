import { FC } from "react";
import StyledArtistAlbums from "../styles/YourLibrary/artistAlbums";

interface IProps {
  artistAlbums: any; //change this
}

const ArtistAlbums: FC<IProps> = ({ artistAlbums }) => {
  return (
    <StyledArtistAlbums>
      <div className="artist-album-container">
        <p className="title">Discography</p>
        <div className="album-cards-container">
          {artistAlbums.items.map((obj) => (
            <div className="album-card" key={obj.id}>
              <img
                src={obj.images[0].url}
                alt="artist-album-img"
                className="album-img"
              />

              <h3>{obj.name}</h3>
              <div className="card-text">
                <h5>{obj.release_date.slice(0, 4)}</h5>
                <span className="type">
                  <h5>{obj.type}</h5>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledArtistAlbums>
  );
};

export default ArtistAlbums;
