import { FC } from "react";

import StyledCreatePlaylist from "./styles/createPlaylist";

interface IProps {
  toggleModal: () => void;
}
const CreatePlaylist: FC<IProps> = ({ toggleModal }) => {
  return (
    <StyledCreatePlaylist>
      <div className="container">
        <div className="s">
          <button type="button" className="btn" onClick={toggleModal}>
            X
          </button>
          <p className="title">Create new playlist</p>
        </div>

        <div className="playlist-input">
          <h4 className="input-title">Playlist Name</h4>
          <input placeholder="New Playlist" className="input"></input>
        </div>
      </div>
      <div className="buttons-container">
        <button className="input-btn cancel-btn">CANCEL</button>
        <button className="input-btn create-btn">CREATE</button>
      </div>
    </StyledCreatePlaylist>
  );
};

export default CreatePlaylist;
