import { NextPage } from "next";

import StyledLikedTracks from "../styles/YourLibrary/likedTracks";
import { IProfileData } from "../types";

interface IProps {
  profileData: IProfileData;
  savedTracks: any;
}

const convertMilliseconds = (milliseconds) => {
  const min = Math.floor((milliseconds / 1000 / 60) << 0);
  const sec = Math.floor((milliseconds / 1000) % 60);
  const res = min + ":" + sec;
  return res;
};

const LikedTracksCard: NextPage<IProps> = ({ profileData, savedTracks }) => {
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
        </div>
        <div className="button-container">
          <button className="play-btn">
            <img
              className="play-img"
              src="/play-solid.svg"
              alt="play-icon"
            ></img>
          </button>
        </div>
        <div className="tracks-header">
          <h5 className="header-item"># TITLE</h5>
          <h5 className="header-item">ALBUM</h5>
          <h5 className="header-item">DATE ADDED</h5>
          <img
            className="clock-icon header-item"
            src="/clock-regular.svg"
            alt="clock-icon"
          />
        </div>
        <div className="tracks-wrapper">
          {savedTracks.items.map((savedTrack) => (
            <div className="card" key={savedTrack.id}>
              <div className="card-title">
                <img
                  className="tracks-pic"
                  src={savedTrack.track.album.images[0].url}
                  alt="tracks-pic"
                />
                <div className="text-card">
                  <p className="song-name" key={savedTrack.id}>
                    {savedTrack.track.name}
                  </p>
                  {savedTrack.track.album.artists.map((artist) => (
                    <p className="info-artist" key={artist.id}>
                      {artist.name}
                    </p>
                  ))}
                </div>
              </div>

              <p className="info-artist" key={savedTrack.track.album.id}>
                {savedTrack.track.album.name}
              </p>
              <p className="info-artist" key={savedTrack.track.album.id}>
                {savedTrack.added_at}
              </p>
              <div>
                <img
                  className="heart-icon"
                  src="/heart-solid.svg"
                  alt="heart-icon"
                />
                <p className="info-artist" key={savedTrack.track.album.id}>
                  {convertMilliseconds(savedTrack.track.duration_ms)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledLikedTracks>
  );
};

export default LikedTracksCard;
