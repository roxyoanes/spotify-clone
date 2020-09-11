import { FC, useState } from "react";

import StyledCreatePlaylist from "./styles/createPlaylist";
import React from "react";

interface IProps {
  toggleModal: () => void;
  userId: string;
}
const CreatePlaylist: FC<IProps> = ({ toggleModal, userId }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCreatePlaylist = () => {
    fetch(`/api/playlist/create-playlist/${value}?userId=${userId}`);
  };

  return (
    <StyledCreatePlaylist>
      <div className="header">
        <button type="button" className="btn" onClick={toggleModal}>
          X
        </button>
        <p className="title">Create new playlist</p>
      </div>

      <div className="playlist-input">
        <h4 className="input-title">Playlist Name</h4>
        <input
          placeholder="New Playlist"
          className="input"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="buttons-container">
        <button className="input-btn cancel-btn" onClick={toggleModal}>
          CANCEL
        </button>
        <button className="input-btn create-btn" onClick={handleCreatePlaylist}>
          CREATE
        </button>
      </div>
    </StyledCreatePlaylist>
  );
};

export default CreatePlaylist;
