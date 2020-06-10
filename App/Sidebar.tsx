import { FC } from "react";
import StyledSidebar from "../styles/sidebar";

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <div className="logo-container">
        <img className="logo" src="/spotify.svg" alt="logo" />
      </div>
      <div className="links-container">
        <a href="">Home</a>
        <a href="">Search</a>
        <a href="">Your Library</a>
      </div>
      <div className="">
        <h2>PLAYLISTS</h2>
        <button>Create Playlists</button>
        <a href="">Liked Songs</a>
      </div>
      <div>
        <a href="">Install App</a>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
