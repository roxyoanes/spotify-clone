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
  .list-item {
    font-size: 14px;
    font-weight: 700;
    padding: 5px 0;
  }
  .login {
    background-color: #fff;
    color: black;
    font-size: 10px;
    padding: 8px 24px;
  }
  .card-title {
    margin: 20px;
    font-size: 20px;
    color: white;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(5, 0.5fr);
    grid-gap: 30px;
    margin: 0 20px;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212121;
    border-radius: 15px;
    padding: 15px 0;
  }
  .text-wrapper {
    text-align: left;
  }
  .card-img {
    width: 80%;
    height: auto;
  }
  .artist-name {
    color: white;
    font-size: 15px;
    margin: 25px 0 14px;
  }
  .title {
    font-size: 12px;
    font-weight: 200;
  }
`;

export default StyledPlaylists;
