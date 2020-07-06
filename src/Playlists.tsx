import { FC } from "react";
import { useSelector } from "react-redux";

import { withRedux } from "./redux/redux";

import Category from "./Category";
import StyledPlaylists from "./styles/playlists";

interface IProps {
  toggleSidebar: () => void;
  props: any;
}

const Playlists: FC<IProps> = ({ props }) => {
  const token = useSelector((state) => state.spotify.access_token);

  return (
    <StyledPlaylists>
      {token ? (
        <div className="playlist-container">
          <div>
            <h4 className="card-title">New Releases</h4>
            <div className="cards-container">
              <Category category={props.newReleases} />
            </div>
          </div>
          <div>
            <h4 className="card-title">Party</h4>
            <div className="cards-container">
              <Category category={props.categoryParty} />
            </div>
          </div>
          <div>
            <h4 className="card-title">Featured Playlists</h4>
            <div className="cards-container">
              <Category category={props.categoryFeatured} />
            </div>
          </div>
          <div>
            <h4 className="card-title">Chill</h4>
            <div className="cards-container">
              <Category category={props.categoryChill} />
            </div>
          </div>
          <div>
            <h4 className="card-title">Hip Hop</h4>
            <div className="cards-container">
              <Category category={props.categoryHipHop} />
            </div>
          </div>
          <div>
            <h4 className="card-title">Pop</h4>
            <div className="cards-container">
              <Category category={props.categoryPop} />
            </div>
          </div>
          <div>
            <h4 className="card-title">Workout</h4>
            <div className="cards-container">
              <Category category={props.categoryWorkout} />
            </div>
          </div>
        </div>
      ) : null}
    </StyledPlaylists>
  );
};

export default withRedux(Playlists);
