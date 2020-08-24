import styled from "@emotion/styled";

const StyledNavbar = styled.div`
  background-color: #131413;
  color: #b3b3b3;

  button {
    background-color: black;
    border-color: transparent;
    color: #fff;
    border-radius: 50px;
    padding: 0 5px;
    font-weight: 600;
    margin: 0 5px;
  }
  .navbar-container {
    padding: 10px 0;
    display: grid;
    grid-template-columns: ${({ libraryMenu }) =>
      libraryMenu === true ? "repeat(3, .5fr) 2fr" : "repeat(2, .5fr) 2fr"};
    background-color: #131413;
    align-items: center;
  }
  .arrow-btn {
    padding: 0 10px;
  }
  .arrow-img,
  .user-menu-arrow {
    width: 10px;
  }
  .user-menu-arrow {
    padding: 0 6px;
  }
  .user-name {
    margin: 0;
    color: white;
    font-size: 22px;
  }
  .navbar-scrolled {
    position: fixed;
    top: 0;
    background-color: black;
    width: -moz-available;
    padding: 10px 0;
    display: grid;
    grid-template-columns: ${({ libraryMenu }) =>
      libraryMenu === true ? "repeat(3, .5fr) 2fr" : "repeat(2, .5fr) 2fr"};
    align-items: center;
  }
  .sidebar-btn {
    padding: 5px 10px;
  }
  .user-menu-list {
    margin-top: 10px;
    transition: height 0.3s;
    position: absolute;
    background-color: #131413;
    padding: 5px 60px 12px 5px;
    border-radius: 12px;
  }
  .user-menu {
    display: flex;
    justify-content: flex-end;
  }
  .user-menu-btn {
    background-color: transparent;
    color: #b3b3b3;
    padding: 5px 0;
    font-weight: 300;
  }
  .user {
    margin-right: 30px;
    display: flex;
    align-items: center;
  }
  .user-pic {
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .library-item {
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    color: white;
  }
`;

export default StyledNavbar;
