import { NextPage } from "next";

import StyledLikedTracks from "../styles/YourLibrary/likedTracks";
import { IProfileData, ISavedTracks } from "../types";
import SavedTrack from "../../src/YourLibrary/SavedTrack";

interface IProps {
  profileData: IProfileData;
  savedTracksData: ISavedTracks;
}

const LikedTracksCard: NextPage<IProps> = ({ savedTracksData }) => {
  return (
    <StyledLikedTracks>
      <div className="button-container">
        <button className="play-btn">
          <img className="play-img" src="/play-solid.svg" alt="play-icon"></img>
        </button>
      </div>
      <div className="tracks-header">
        <h5 className="header-item"># TITLE</h5>
        <h5 className="header-item">ALBUM</h5>
        <h5 className="header-item">DATE ADDED</h5>
        <img
          className="clock-icon header-item"
          src="/clock-regular.svg"
          alt="clock-icon"
        />
      </div>
      <div className="tracks-wrapper">
        {savedTracksData.items.map((savedTrack, i) => (
          <>
            {console.log("sss", savedTrack)}
            <SavedTrack
              key={savedTrack.track.id}
              savedTrack={savedTrack}
              index={i}
            />
          </>
        ))}
      </div>
    </StyledLikedTracks>
  );
};

export default LikedTracksCard;
