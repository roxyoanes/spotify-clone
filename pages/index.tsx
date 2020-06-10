import { FC, useState } from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import Sidebar from "../App/Sidebar";
import Playlists from "../App/Playlists";

const StyledContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-template-rows: 1fr;
`;

const Home: FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <StyledContainer>
      {openSidebar ? (
        <>
          <Sidebar />
          <Playlists toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <Playlists toggleSidebar={toggleSidebar} />
      )}

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

export default Home;
