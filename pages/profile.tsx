import { spotifyApi } from "../src/server/spotifyApi";

import { useState } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import Sidebar from "../src/Sidebar";
import UserProfile from "../src/UserProfile";
import Navbar from "../src/Navbar";

interface IStyledProps {
  opensidebar: boolean;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "260px 8fr" : "1fr"};
`;

const Profile = (props: any) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log(props);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <StyledContainer opensidebar={openSidebar}>
        <Sidebar openSidebar={openSidebar} />
        <UserProfile />

        <Global
          styles={css`
            html,
            body {
              padding: 0;
              margin: 0 !important;
              font-family: "arial", sans-serif;
            }
            a {
              text-decoration: none;
              cursor: pointer;
              color: #b3b3b3;
              &:hover {
                color: #fff;
              }
            }
          `}
        />
      </StyledContainer>
    </>
  );
};

Profile.getInitialProps = async () => {
  const profileData = await spotifyApi.getMe();
  console.log("ddd", profileData);

  return profileData;
};

export default Profile;
