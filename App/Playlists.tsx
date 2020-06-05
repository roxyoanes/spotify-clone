import React from "react";
import { FC } from "react";

interface IProps {
  toggleSidebar: () => void;
}

const Playlists: FC<IProps> = ({ toggleSidebar }) => {
  return (
    <div className="playlists-container">
      <p>playlists</p>
      <button onClick={toggleSidebar}>Open</button>
      <style jsx>{``}</style>
    </div>
  );
};

export default Playlists;
