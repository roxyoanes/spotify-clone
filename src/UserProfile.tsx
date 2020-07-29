import { FC } from "react";
import { useSelector } from "react-redux";

import StyledUserProfile from "./styles/profile";
import { IProfileData } from "./types";

interface IProps {
  profileData: IProfileData;
}
const UserProfile: FC<IProps> = ({ profileData }) => {
  const token = useSelector((state) => state.spotify.access_token);
  console.log("ccc", profileData);
  return (
    <StyledUserProfile>
      {token ? (
        <div className="container">
          <div className="profile-card">
            <img
              className="profile-pic"
              src={profileData.body.images[0].url}
              alt="profile-pic"
            />
            <div className="text-card">
              <h5 className="title">PROFILE</h5>
              <h1 className="name">{profileData.body.display_name}</h1>
              <h6 className="followers">
                {profileData.body.followers.total} Followers
              </h6>
            </div>
          </div>
        </div>
      ) : null}
    </StyledUserProfile>
  );
};

export default UserProfile;
