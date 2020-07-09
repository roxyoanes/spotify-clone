import { FC } from "react";
import { useSelector } from "react-redux";

import StyledUserProfile from "./styles/profile";

interface IProps {
  props: any;
}
const UserProfile: FC<IProps> = ({ props }) => {
  const token = useSelector((state) => state.spotify.access_token);
  console.log("props", props.profileData.body);
  const profileInfo = props.profileData.body;
  return (
    <StyledUserProfile>
      {token ? (
        <div className="container">
          <div className="profile-card">
            <img
              className="profile-pic"
              src={profileInfo.images[0].url}
              alt="profile-pic"
            />
            <div className="text-card">
              <h5 className="title">PROFILE</h5>
              <h1 className="name">{profileInfo.display_name}</h1>
              <h6 className="followers">
                {profileInfo.followers.total} Followers
              </h6>
            </div>
          </div>
        </div>
      ) : null}
    </StyledUserProfile>
  );
};

export default UserProfile;
