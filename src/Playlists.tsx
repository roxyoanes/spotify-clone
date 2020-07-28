import { FC } from "react";
import { useSelector } from "react-redux";

import { withRedux } from "./redux/redux";

import Category from "./Category";
import StyledPlaylists from "./styles/playlists";
import { IAlbum } from "./types";

interface IProps {
  toggleSidebar: () => boolean;
  newReleases: IAlbum[];
  playlists: {
    [key: string]: any;
  };
}

const Playlists: FC<IProps> = ({ newReleases, playlists }) => {
  const token = useSelector((state) => state.spotify.access_token);
  return (
    <StyledPlaylists>
      {token ? (
        <div className="playlist-container">
          <div>
            <h4 className="card-title">New Releases</h4>
            <div className="cards-container">
              <Category category={newReleases} />
            </div>
          </div>
          {Object.keys(playlists).map((playlistName) => (
            <div key={playlistName}>
              <h4 className="card-title">{playlistName}</h4>
              <div className="cards-container">
                <Category category={playlists[playlistName]} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </StyledPlaylists>
  );
};

export default withRedux(Playlists);
