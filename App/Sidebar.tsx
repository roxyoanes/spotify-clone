import { FC } from "react";
import StyledSidebar from "../styles/sidebar";

interface IProps {
  openSidebar: boolean;
}

const Sidebar: FC<IProps> = ({ openSidebar }) => {
  return (
    <StyledSidebar opensidebar={openSidebar}>
      <div className="logo-container">
        <img className="logo" src="/spotify.svg" alt="logo" />
      </div>
      <div className="links-container">
        <a className="link" href="">
          Home
        </a>
        <a className="link" href="">
          Search
        </a>
        <a className="link" href="">
          Your Library
        </a>
      </div>
      <h6 className="title">PLAYLISTS</h6>
      <div className="playlist-container">
        <a className="link" href="">
          Create Playlist
        </a>
        <a className="link" href="">
          Liked Songs
        </a>
      </div>
      <div className="footer">
        <a className="link" href="">
          Install App
        </a>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
