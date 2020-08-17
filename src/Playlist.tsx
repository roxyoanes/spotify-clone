import { useRouter } from "next/router";
import Router from "next/router";

import { NextPage } from "next";
import { IGetPlaylist } from "./types";

import StyledPlaylist from "./styles/playlist";
import { useState } from "react";

interface IProps {
  playlist: IGetPlaylist;
}

const Playlist: NextPage<IProps> = ({ playlist }) => {
  const router = useRouter();
  const { playlistId } = router.query;

  const [openPlaylistMenu, setOpenPlaylistMenu] = useState(false);

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
          <div className="text-card">
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
          {playlist.tracks.items.map((item) => (
            <div className="song-container" key={item.track.id}>
              <img
                className="music-icon"
                src="/music-solid.svg"
                alt="music-icon"
              ></img>
              <div className="song-wrapper">
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
          ))}
        </div>
      </div>
    </StyledPlaylist>
  );
};

export default Playlist;
