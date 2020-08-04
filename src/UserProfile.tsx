import { FC } from "react";
import { useSelector } from "react-redux";

import StyledUserProfile from "./styles/profile";
import { IProfileData, IUserPlaylists } from "./types";
import UserPlaylists from "./UserPlaylists";

interface IProps {
  profileData: IProfileData;
  userPlaylists: IUserPlaylists;
}
const UserProfile: FC<IProps> = ({ profileData, userPlaylists }) => {
  const token = useSelector((state) => state.spotify.access_token);
  return (
    <StyledUserProfile>
      {token ? (
        <div className="container">
          <div className="profile-card">
            <img
              className="profile-pic"
              src={profileData.images[0].url}
              alt="profile-pic"
            />
            <div className="text-card">
              <h5 className="title">PROFILE</h5>
              <h1 className="name">{profileData.display_name}</h1>
              <h6 className="info-user">
                {profileData.followers.total} Followers
              </h6>
            </div>
          </div>
          <div className="profile-playlists">
            <h4 className="title">Public Playlists</h4>
            <div className="cards-container">
              <UserPlaylists userPlaylists={userPlaylists} />
            </div>
          </div>
        </div>
      ) : null}
    </StyledUserProfile>
  );
};

export default UserProfile;
