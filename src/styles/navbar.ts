import styled from "@emotion/styled";

const StyledNavbar = styled.div`
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
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    background-color: black;
  }
  .open-list,
  .user-menu-list {
    margin-top: 10px;
    transition: height 0.3s;
    position: absolute;
  }
  .user-menu {
    display: flex;
    justify-content: flex-end;
  }
  .list {
    display: none;
  }
  .list-item {
    font-size: 14px;
    font-weight: 700;
    padding: 5px 0;
  }
`;

export default StyledNavbar;
