import { NextPage } from "next";

import { IFollowedArtists } from "../types";
import StyledFollowedArtists from "../styles/YourLibrary/artists";

interface IProps {
  followedArtists: IFollowedArtists;
}

const ArtistsCard: NextPage<IProps> = ({ followedArtists }) => {
  return (
    <StyledFollowedArtists>
      <div className="container">
        <div className="artists-main">
          <h1 className="card-title">Artists</h1>
          <div className="artists-wrapper">
            {followedArtists.artists.items.map((followedArtist) => (
              <div className="card" key={followedArtist.id}>
                <img
                  className="artist-pic"
                  src={followedArtist.images[0].url}
                  alt="artist-pic"
                />
                <div className="text-card">
                  <h6 className="name">{followedArtist.name}</h6>
                  <p className="info-artist" key={followedArtist.id}>
                    {followedArtist.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledFollowedArtists>
  );
};

export default ArtistsCard;
