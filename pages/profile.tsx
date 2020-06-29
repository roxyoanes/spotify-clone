import { NextPage } from "next";

import { spotifyApi } from "../src/server/spotifyApi";

import { useState } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import Sidebar from "../src/Sidebar";
import Playlists from "../src/Playlists";

interface IStyledProps {
  opensidebar: boolean;
}

const StyledContainer = styled.div<IStyledProps>`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ opensidebar }) =>
    opensidebar === true ? "4fr 8fr" : "1fr"};
`;

const Profile: NextPage<any> = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log(props);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <StyledContainer opensidebar={openSidebar}>
      <Sidebar openSidebar={openSidebar} />
      <Playlists toggleSidebar={toggleSidebar} />

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
  );
};

Profile.getInitialProps = async () => {
  const profileData = await spotifyApi.getMe();

  return profileData;
  console.log("ddd", profileData);
};

export default Profile;
