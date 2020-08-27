import { NextPage } from "next";

import StyledLikedTracks from "../styles/YourLibrary/likedTracks";
import { IProfileData } from "../types";

interface IProps {
  profileData: IProfileData;
  savedTracks: any;
}

const LikedTracksCard: NextPage<IProps> = ({ profileData, savedTracks }) => {
  console.log("dd", savedTracks);
  return (
    <StyledLikedTracks>
      <div className="container">
        <div className="wrapper-header">
          <div className="icon-background">
            <img className="icon" src="/heart-solid.svg" alt="logo" />
          </div>
          <div className="text-card">
            <p>PLAYLIST</p>
            <h1 className="card-title">Liked Songs</h1>
            <div className="user-info-container">
              <img
                className="user-pic"
                src={profileData.images[0].url}
                alt="profile-pic"
              />
              <p className="user-name">{profileData.display_name}</p>
            </div>
          </div>
          <div className="playlist-container"></div>
        </div>
        {/*  <div className="artists-wrapper">
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
          </div> */}
      </div>
    </StyledLikedTracks>
  );
};

export default LikedTracksCard;
