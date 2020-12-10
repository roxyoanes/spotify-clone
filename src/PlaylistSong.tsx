import { NextPage } from "next";

import StyledPlaylist from "./styles/playlist";
import { IProfileData, ISavedTracks } from "./types";
import toggleSongMenuHook from "./../src/toggleSongMenuHook";

interface IProps {
  profileData: IProfileData;
  savedTracksData: ISavedTracks;
  toggleSongMenu: (e: boolean) => void;
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

const PlaylistSong: NextPage<IProps> = ({ song, index, hoverButton }) => {
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();
  return (
    <StyledPlaylist hoverButton={hoverButton}>
      <div className="song-container" key={song.track.id}>
        <div className="card-title">
          <h6 className="song-index">{index + 1}</h6>
          <img
            className="tracks-pic"
            src={song.track.album.images[0].url}
            alt="tracks-pic"
          />
          <div className="text-card">
            <p className="song-title">{song.track.name}</p>
            <div className="artists-container">
              {song.track.artists.map((artist) => (
                <p className="artist" key={artist.id}>
                  {artist.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="info-artist" key={song.track.album.id}>
          {song.track.album.name}
        </p>

        <div className="song-duration-wrapper">
          <img className="heart-icon" src="/heart-solid.svg" alt="heart-icon" />
          <p className="info-artist" key={song.track.id}>
            {convertMilliseconds(song.track.duration_ms)}
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
    </StyledPlaylist>
  );
};

export default PlaylistSong;
