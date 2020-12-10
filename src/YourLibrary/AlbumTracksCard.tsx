import { NextPage } from "next";

import StyledAlbumTracks from "../styles/YourLibrary/albumTracks";
import togglePlaylistMenuHook from "../togglePlaylistMenuHooks";
import AlbumTrackCard from "../YourLibrary/AlbumTrackCard";

import { IUserPlaylists } from "../types";

interface IProps {
  albumTracksData: IUserPlaylists;
}

const AlbumTracksCard: NextPage<IProps> = ({ albumTracksData }) => {
  const { openPlaylistMenu, togglePlaylistMenu } = togglePlaylistMenuHook();

  return (
    <StyledAlbumTracks>
      <div className="container">
        <div className="buttons-container">
          <button className="play-btn">
            <img
              className="play-img"
              src="/play-solid.svg"
              alt="play-icon"
            ></img>
          </button>
          <div className="playlist-menu-container">
            <button className="playlist-menu-btn" onClick={togglePlaylistMenu}>
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
          <div className="icon-wrapper">
            <img
              className="clock-icon header-item"
              src="/clock-regular.svg"
              alt="clock-icon"
            />
          </div>
        </div>
        {albumTracksData.items.map((track, index) => (
          <AlbumTrackCard key={track.id} track={track} index={index} />
        ))}
      </div>
    </StyledAlbumTracks>
  );
};

export default AlbumTracksCard;
