import { FC } from "react";
import StyledRelatedArtists from "../styles/YourLibrary/relatedArtists";
import { IRelatedTracks } from "../types";

interface IProps {
  relatedArtists: IRelatedTracks;
}

const RelatedArtists: FC<IProps> = ({ relatedArtists }) => {
  return (
    <StyledRelatedArtists>
      <div className="related-artists-container">
        <p className="title">Fans also like</p>
        <div className="cards-container">
          {relatedArtists.artists.slice(0, 4).map((artist) => (
            <div className="related-artist-card" key={artist.id}>
              <img
                src={artist.images[0].url}
                alt="artist-pic"
                className="artist-img"
              />
              <h3 className="name">{artist.name}</h3>
              <h5 className="type">{artist.type}</h5>
            </div>
          ))}
        </div>
      </div>
    </StyledRelatedArtists>
  );
};

export default RelatedArtists;
