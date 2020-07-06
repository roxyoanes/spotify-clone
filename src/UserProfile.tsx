import { FC } from "react";
import { useSelector } from "react-redux";

import StyledUserProfile from "./styles/profile";

interface IProps {
  toggleSidebar: () => void;
}

const UserProfile: FC<IProps> = ({ toggleSidebar }) => {
  /*   const token = useSelector((state) => state.spotify.access_token);
   */
  return (
    <StyledUserProfile>
      <div className="container"></div>
    </StyledUserProfile>
  );
};

export default UserProfile;
