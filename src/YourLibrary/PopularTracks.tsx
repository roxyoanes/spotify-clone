import { FC } from "react";
import StyledPopularTracks from "../styles/YourLibrary/popularTracks";
import toggleSongMenuHook from "../../src/toggleSongMenuHook";

interface IProps {
  toggleSongMenu: (e: any) => void;
  openSongMenu: boolean;
  artistTracks: any; //change
}

const convertMilliseconds = (milliseconds) => {
  const min = Math.floor((milliseconds / 1000 / 60) << 0);
  const sec = Math.floor((milliseconds / 1000) % 60);
  const res = min + ":" + sec;
  return res;
};

const PopularTracks: FC<IProps> = ({ artistTracks }) => {
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();
  console.log("xx", artistTracks);
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
            <button
              className="playlist-menu-btn"
              /* onClick={togglePlaylistMenu} */
            >
              <img
                className="playlist-menu-img"
                src="/ellipsis-h-solid.svg"
                alt="play-icon"
              ></img>
            </button>
            {/* {openPlaylistMenu ? (
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
              ) : null} */}
          </div>
        </div>
        <p>Popular</p>
        {artistTracks.map((track, i) => (
          <div key={track.id} className="song-container">
            <div className="card-title">
              <h6 className="song-index">{i + 1}</h6>
              <img
                src={track.album.images[0].url}
                className="song-image"
                alt="song-image"
              />
              <h5 className="name">{track.name}</h5>
            </div>

            <div className="song-duration-wrapper">
              <img
                className="heart-icon"
                src="/heart-solid.svg"
                alt="heart-icon"
              />
              <p className="info-artist" key={track.id}>
                {convertMilliseconds(track.duration_ms)}
              </p>

              <div className="song-menu-container">
                <div className="menu-container">
                  <button
                    className="song-menu-btn"
                    onClick={() => toggleSongMenu(i + 1)}
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
    </StyledPopularTracks>
  );
};

export default PopularTracks;
