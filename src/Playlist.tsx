import { NextPage } from "next";
import { IGetPlaylist } from "./types";

import StyledPlaylist from "./styles/playlist";
import { useState } from "react";
import toggleSongMenuHook from "./toggleSongMenuHook";

interface IProps {
  playlist: IGetPlaylist;
}

const Playlist: NextPage<IProps> = ({ playlist, convertMilliseconds }) => {
  const [openPlaylistMenu, setOpenPlaylistMenu] = useState(false);
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();

  const togglePlaylistMenu = () => {
    setOpenPlaylistMenu(!openPlaylistMenu);
  };

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
          {playlist.tracks.items.map((item, index) => (
            <div className="song-container" key={item.track.id}>
              <div className="card-title">
                <h6 className="song-index">{index + 1}</h6>
                <img
                  className="tracks-pic"
                  src={item.track.album.images[0].url}
                  alt="tracks-pic"
                />
                <div className="text-card">
                  <p className="song-title">{item.track.name}</p>
                  <div className="artists-container">
                    {item.track.artists.map((artist) => (
                      <p className="artist" key={artist.id}>
                        {artist.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <p className="info-artist" key={item.track.album.id}>
                {item.track.album.name}
              </p>

              <div className="song-duration-wrapper">
                <img
                  className="heart-icon"
                  src="/heart-solid.svg"
                  alt="heart-icon"
                />
                <p className="info-artist" key={item.track.id}>
                  {convertMilliseconds(item.track.duration_ms)}
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
                        <button className="song-menu-btn">
                          Add to Playlist
                        </button>
                        <button className="song-menu-btn">Show credits</button>
                        <button className="song-menu-btn">
                          Copy Song Link
                        </button>
                        <button className="song-menu-btn">
                          Open in Desktop app
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledPlaylist>
  );
};

export default Playlist;
