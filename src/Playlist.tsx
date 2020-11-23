import { NextPage } from "next";
import { IGetPlaylist } from "./types";

import StyledPlaylist from "./styles/playlist";
import toggleSongMenuHook from "./toggleSongMenuHook";
import togglePlaylistMenuHook from "./togglePlaylistMenuHooks";
import PlaylistSong from "./PlaylistSong";

interface IProps {
  playlist: IGetPlaylist;
}

const Playlist: NextPage<IProps> = ({ playlist, convertMilliseconds }) => {
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();
  const { openPlaylistMenu, togglePlaylistMenu } = togglePlaylistMenuHook();

  return (
    <StyledPlaylist>
      <div className="container">
        <div className="playlist-main">
          <img
            className="playlist-pic"
            src={playlist.images[0].url}
            alt="playlist-pic"
          />
          <div className="first-text-card">
            <h5 className="title">Playlist</h5>
            <h1 className="name">{playlist.name}</h1>
            <h4 className="description">{playlist.description}</h4>
          </div>
        </div>
        <div className="playlist-container">
          <div className="buttons-container">
            <button className="play-btn">
              <img
                className="play-img"
                src="/play-solid.svg"
                alt="play-icon"
              ></img>
            </button>
            <div className="playlist-menu-container">
              <button
                className="playlist-menu-btn"
                onClick={togglePlaylistMenu}
              >
                <img
                  className="playlist-menu-img"
                  src="/ellipsis-h-solid.svg"
                  alt="play-icon"
                ></img>
              </button>
              {openPlaylistMenu ? (
                <div className="playlist-menu-list">
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
                    <button className="menu-btn">Make secret</button>
                    <button className="menu-btn">Delete</button>
                    <button className="menu-btn">Copy Playlist link</button>
                    <button className="menu-btn">Open in Desktop app</button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="tracks-header">
            <h5 className="header-item"># TITLE</h5>
            <h5 className="header-item">ALBUM</h5>
            <img
              className="clock-icon header-item"
              src="/clock-regular.svg"
              alt="clock-icon"
            />
          </div>
          {playlist.tracks.items.map((song, index) => (
            <PlaylistSong song={song} index={index} key={index} />
          ))}
        </div>
      </div>
    </StyledPlaylist>
  );
};

export default Playlist;
