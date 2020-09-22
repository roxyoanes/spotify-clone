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
}

const convertMilliseconds = (milliseconds) => {
  const min = Math.floor((milliseconds / 1000 / 60) << 0);
  const sec = Math.floor((milliseconds / 1000) % 60);
  const res = min + ":" + sec;
  return res;
};

const SavedTrack: NextPage<IProps> = ({ savedTrack, index }) => {
  const { toggleSongMenu, openSongMenu } = toggleSongMenuHook();
  console.log("xx", savedTrack);
  return (
    <StyledLikedTracks>
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
            <button
              className="song-menu-btn"
              onClick={() => toggleSongMenu(index + 1)}
              {...console.log("ddda", index + 1)}
            >
              <img
                className="song-menu-img"
                src="/ellipsis-h-solid.svg"
                alt="play-icon"
              ></img>
            </button>
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
                  <button className="menu-btn">Make secret</button>
                  <button className="menu-btn">Delete</button>
                  <button className="menu-btn">Copy Playlist link</button>
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
