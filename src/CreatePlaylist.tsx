import { FC } from "react";

import StyledCreatePlaylist from "./styles/createPlaylist";

interface IProps {
  toggleModal: () => void;
}
const CreatePlaylist: FC<IProps> = ({ toggleModal }) => {
  return (
    <StyledCreatePlaylist>
      <div className="container">
        <div className="modal">
          <button type="button" className="btn" onClick={toggleModal}>
            X
          </button>
          <p>hey</p>
        </div>
      </div>
    </StyledCreatePlaylist>
  );
};

export default CreatePlaylist;
