import { FC } from "react";
import StyledPopularTracks from "../styles/YourLibrary/popularTracks";
import PopularTrackCard from "./PopularTrackCard";
import togglePlaylistMenuHook from "../togglePlaylistMenuHooks";

interface IProps {
  artistTracks: any; //change
  index: number;
  track: any; //change
}

const PopularTracks: FC<IProps> = ({ artistTracks }) => {
  const { openPlaylistMenu, togglePlaylistMenu } = togglePlaylistMenuHook();

  return (
    <StyledPopularTracks>
      <div className="popular-tracks-card">
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
        <p className="title">Popular</p>
        {artistTracks.map((track, index) => (
          <PopularTrackCard key={track.id} track={track} index={index} />
        ))}
      </div>
    </StyledPopularTracks>
  );
};

export default PopularTracks;
