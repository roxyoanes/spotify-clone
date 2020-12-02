import React, { FC } from "react";
import StyledAlbumTracks from "../styles/YourLibrary/albumTracks";
import toggleSongMenuHook from "../../src/toggleSongMenuHook";

interface IProps {
  toggleSongMenu: (e: any) => void;
  openSongMenu: boolean;
  index: number;
  track: any; //change
}

const convertMilliseconds = (milliseconds) => {
  const min = Math.floor((milliseconds / 1000 / 60) << 0);
  const sec = Math.floor((milliseconds / 1000) % 60);
  const res = min + ":" + sec;
  return res;
};
const AlbumTrackCard: FC<IProps> = ({ track, index }) => {
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();

  return (
    <StyledAlbumTracks>
      <div key={track.id} className="song-container">
        <div className="card-title">
          <h6 className="song-index">{index + 1}</h6>
          <h5 className="name">{track.name}</h5>
          <h5 className="name">{track.artists[0].name}</h5>
        </div>

        <div className="song-duration-wrapper">
          <img className="heart-icon" src="/heart-solid.svg" alt="heart-icon" />
          <p className="info-artist" key={track.id}>
            {convertMilliseconds(track.duration_ms)}
          </p>

          <div className="song-menu-container">
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
                  <button className="song-menu-btn">Start Radio</button>
                  <button className="menu-btn">
                    Remove from your Liked Songs
                  </button>
                  <button className="song-menu-btn">Add to Queue</button>
                  <button className="song-menu-btn">Add to Playlist</button>
                  <button className="song-menu-btn">Show credits</button>
                  <button className="song-menu-btn">Copy Song Link</button>
                  <button className="song-menu-btn">Open in Desktop app</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </StyledAlbumTracks>
  );
};

export default AlbumTrackCard;
