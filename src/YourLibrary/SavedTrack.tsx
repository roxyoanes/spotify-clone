import { NextPage } from "next";

import StyledLikedTracks from "../styles/YourLibrary/likedTracks";
import { IProfileData, ISavedTracks } from "../types";
import toggleSongMenuHook from "../../src/toggleSongMenuHook";

interface IProps {
  profileData: IProfileData;
  savedTracksData: ISavedTracks;
  toggleSongMenu: (e: any) => void;
  openSongMenu: boolean;
  index: number;
  hoverButton: boolean;
}

const convertMilliseconds = (milliseconds) => {
  const min = Math.floor((milliseconds / 1000 / 60) << 0);
  const sec = Math.floor((milliseconds / 1000) % 60);
  const res = min + ":" + sec;
  return res;
};

const SavedTrack: NextPage<IProps> = ({ savedTrack, index, hoverButton }) => {
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();
  return (
    <StyledLikedTracks hoverButton={hoverButton}>
      <div className="card" key={savedTrack.track.id}>
        <div className="card-title">
          <h6 className="song-index">{index + 1}</h6>
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
          <img className="heart-icon" src="/heart-solid.svg" alt="heart-icon" />
          <p className="info-artist" key={savedTrack.track.album.id}>
            {convertMilliseconds(savedTrack.track.duration_ms)}
          </p>

          <div className="song-menu-container">
            {hoverButton && (
              <div className="menu-container">
                <button
                  className="song-menu-btn"
                  onClick={() => toggleSongMenu(index + 1)}
                >
                  <img
                    className="song-menu-img"
                    src="/ellipsis-h-solid.svg"
                    alt="play-icon"
                  ></img>
                </button>
              </div>
            )}
            {openSongMenu ? (
              <div className="song-menu-list">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "baseline",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <button className="menu-btn">Start Radio</button>
                  <button className="menu-btn">
                    Remove from your Liked Songs
                  </button>
                  <button className="menu-btn">Add to Queue</button>
                  <button className="menu-btn">Add to Playlist</button>
                  <button className="menu-btn">Show credits</button>
                  <button className="menu-btn">Copy Song Link</button>
                  <button className="menu-btn">Open in Desktop app</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </StyledLikedTracks>
  );
};

export default SavedTrack;
