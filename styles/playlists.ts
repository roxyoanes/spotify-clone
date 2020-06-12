import styled from "@emotion/styled";

const StyledPlaylists = styled.div`
  background-color: #131413;
  color: #b3b3b3;

  button {
    background-color: black;
    border-color: transparent;
    color: #fff;
    border-radius: 10px;
    padding: 8px 5px;
    font-weight: 600;
    margin: 0 5px;
  }

  .navbar-container {
    margin: 10px;
    z-index: 99;
    position: static;
    display: flex;
  }
  .open-list,
  .user-menu-list {
    margin-top: 10px;
    transition: height 0.3s;
  }
  .user-menu {
    margin-left: 180px;
  }
  .list-item {
    font-size: 14px;
    font-weight: 700;
    padding: 5px 0;
  }
`;

export default StyledPlaylists;
