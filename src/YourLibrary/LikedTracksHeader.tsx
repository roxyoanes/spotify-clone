import StyledLikedTracksHeader from "../styles/YourLibrary/likedTracksHeader";
import { NextPage } from "next";
import { IProfileData } from "../types";

interface IProps {
  profileData: IProfileData;
}

const LikedTracksHeader: NextPage<IProps> = ({ profileData }) => {
  return (
    <StyledLikedTracksHeader>
      <div className="wrapper-header">
        <div className="icon-background">
          <img className="icon" src="/heart-solid.svg" alt="logo" />
        </div>
        <div className="text-card">
          <p>PLAYLIST</p>
          <h1 className="card-title">Liked Songs</h1>
          <div className="user-info-container">
            <img
              className="user-pic"
              src={profileData.images[0].url}
              alt="profile-pic"
            />
            <p className="user-name">{profileData.display_name}</p>
          </div>
        </div>
      </div>
    </StyledLikedTracksHeader>
  );
};

export default LikedTracksHeader;
