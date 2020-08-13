import { FC } from "react";
import StyledSidebar from "./styles/sidebar";

interface IProps {
  openSidebar: boolean;
}

const Sidebar: FC<IProps> = ({ openSidebar }) => {
  return (
    <StyledSidebar opensidebar={openSidebar}>
      <div className="sidebar-wrapper">
        <div className="main-container">
          <img className="logo" src="/spotify.svg" alt="logo" />
          <div className="sidebar-links-container">
            <div className="links-container">
              <a className="link" href="">
                <img className="icon" src="/home-solid.svg" alt="logo" />
                Home
              </a>
              <a className="link" href="">
                <img className="icon" src="/search-solid.svg" alt="logo" />
                Search
              </a>
              <a className="link" href="">
                <img className="icon" src="/book-open-solid.svg" alt="logo" />
                Your Library
              </a>
            </div>
            <h6 className="title">PLAYLISTS</h6>
            <div className="links-container">
              <a className="link" href="">
                <img className="icon-plus" src="/plus-solid.svg" alt="logo" />
                Create Playlist
              </a>
              <a className="link" href="">
                <img className="icon" src="/heart-solid.svg" alt="logo" />
                Liked Songs
              </a>
            </div>
          </div>
          <div className="footer">
            <a className="link" href="">
              <img
                className="icon"
                src="/arrow-alt-circle-down-regular.svg"
                alt="logo"
              />
              Install App
            </a>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
