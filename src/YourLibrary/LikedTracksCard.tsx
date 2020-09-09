import { NextPage } from "next";

import StyledLikedTracks from "../styles/YourLibrary/likedTracks";
import { IProfileData, ISavedTracks } from "../types";

interface IProps {
  profileData: IProfileData;
  savedTracks: ISavedTracks;
}

const convertMilliseconds = (milliseconds) => {
  const min = Math.floor((milliseconds / 1000 / 60) << 0);
  const sec = Math.floor((milliseconds / 1000) % 60);
  const res = min + ":" + sec;
  return res;
};

const LikedTracksCard: NextPage<IProps> = ({ savedTracks }) => {
  return (
    <StyledLikedTracks>
      <div className="button-container">
        <button className="play-btn">
          <img className="play-img" src="/play-solid.svg" alt="play-icon"></img>
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
        {savedTracks.items.map((savedTrack, i) => (
          <div className="card" key={savedTrack.track.id}>
            <div className="card-title">
              <h6 className="song-index">{i + 1}</h6>
              <img
                className="tracks-pic"
                src={savedTrack.track.album.images[0].url}
                alt="tracks-pic"
              />
              <div className="text-card">
                <p className="song-name" key={savedTrack.track.id}>
                  {savedTrack.track.name}
                </p>
                <div className="artists-container">
                  {savedTrack.track.album.artists.map((artist) => (
                    <p className="artist-name" key={artist.id}>
                      {artist.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <p className="info-artist" key={savedTrack.track.album.id}>
              {savedTrack.track.album.name}
            </p>
            <p className="info-artist" key={savedTrack.track.album.id}>
              {savedTrack.added_at}
            </p>
            <div className="song-duration-wrapper">
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
    </StyledLikedTracks>
  );
};

export default LikedTracksCard;
