import React from "react";
import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img className="logo" src="/spotify.svg" alt="logo" />
      </div>
      <div>
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
      <style jsx>{`
        background-color: black;
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }
        .logo {
          width: 60%;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
