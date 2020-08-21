import { NextPage } from "next";

import StyledAlbum from "./styles/album";

interface IProps {}

const Library: NextPage<IProps> = () => {
  return (
    <StyledAlbum>
      <div className="container">
        <div className="album-main">
          <h1>Playlists</h1>
        </div>
      </div>
    </StyledAlbum>
  );
};

export default Library;
