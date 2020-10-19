import { NextPage } from "next";

import { IFollowedArtists } from "../types";
import StyledFollowedArtists from "../styles/YourLibrary/artists";
import Link from "next/link";

interface IProps {
  artistsData: IFollowedArtists;
}

const ArtistsCard: NextPage<IProps> = ({ artistsData }) => {
  return (
    <StyledFollowedArtists>
      <div className="container">
        <div className="artists-main">
          <h1 className="card-title">Artists</h1>
          <div className="artists-wrapper">
            {artistsData.artists.items.map((followedArtist) => (
              <Link
                href="/artist/[artistId]"
                as={`/artist/${followedArtist.id}`}
                key={followedArtist.id}
              >
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </StyledFollowedArtists>
  );
};

export default ArtistsCard;
