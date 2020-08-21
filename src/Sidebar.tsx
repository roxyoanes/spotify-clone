import { FC } from "react";
import StyledSidebar from "./styles/sidebar";
import Link from "next/link";

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
              <div className="link">
                <img className="icon" src="/home-solid.svg" alt="logo" />
                <Link href="">Home</Link>
              </div>
              <div className="link">
                <img className="icon" src="/search-solid.svg" alt="logo" />
                <Link href="">Search</Link>
              </div>
              <div className="link">
                <img className="icon" src="/book-open-solid.svg" alt="logo" />
                <Link href="/collection/playlists" as={`/collection/playlists`}>
                  <a> Your Library</a>
                </Link>
              </div>
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
