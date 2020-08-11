import { useRouter } from "next/router";
import { NextPage } from "next";
import { IPlaylist } from "./types";

import StyledPlaylist from "./styles/playlist";

interface IProps {
  playlist: IPlaylist;
}

const Playlist: NextPage<IProps> = ({ playlist }) => {
  const router = useRouter();
  const { playlistId } = router.query;
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
            <button className="playlist-menu-btn">
              <img
                className="playlist-menu-img"
                src="/ellipsis-h-solid.svg"
                alt="play-icon"
              ></img>
            </button>
          </div>
          {playlist.tracks.items.map((item) => (
            <div className="song-container" key={item.id}>
              <img
                className="music-icon"
                src="/music-solid.svg"
                alt="music-icon"
              ></img>
              <p className="song-title">{item.track.name}</p>
              <div className="artists-container">
                {item.track.artists.map((artist) => (
                  <p className="artist" key={item.id}>
                    {artist.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledPlaylist>
  );
};

export default Playlist;
