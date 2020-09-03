import styled from "@emotion/styled";

interface IProps {
  navbarDefault: boolean;
  navbarDefaultScrolled: boolean;
}
const StyledNavbar = styled.div<IProps>`
  color: #b3b3b3;

  button {
    background-color: transparent;
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
    grid-template-columns: ${({ navbarDefault }) =>
      navbarDefault === true ? "repeat(2, .5fr) 2fr" : "repeat(3, .5fr) 2fr"};
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
    grid-template-columns: ${({ navbarDefaultScrolled }) =>
      navbarDefaultScrolled === true
        ? "repeat(2, .5fr) 2fr"
        : "repeat(3, .5fr) 2fr"};
    align-items: center;
  }
  .sidebar-btn {
    padding: 5px 10px;
  }
  .user-menu-list {
    margin-top: 5px;
    transition: height 0.3s;
    position: absolute;
    background-color: #333;
    padding: 5px 90px 12px 5px;
    border-radius: 8px;
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
  .btn-user {
    margin-right: 30px;
    display: flex;
    align-items: center;
    background-color: #333;
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
  .liked-songs {
    font-size: 22px;
    color: white;
    margin: 0;
  }
`;

export default StyledNavbar;
