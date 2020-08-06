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
    grid-template-columns: repeat(3, 1fr) 2fr;
    background-color: #131413;
    align-items: center;
  }
  .arrow-btn {
    padding: 0 10px;
  }
  .arrow-img {
    width: 10px;
  }
  .navbar-scrolled {
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    width: 100%;
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 2fr;
    align-items: center;
  }
  .open-list,
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
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .user-pic {
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
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
