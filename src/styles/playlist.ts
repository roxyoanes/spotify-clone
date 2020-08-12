import styled from "@emotion/styled";

const StyledPlaylist = styled.div`
  color: white;
  padding: 20px 30px;
  margin: 0 40px;

  .playlist-main {
    display: flex;
    align-items: end;
  }
  .playlist-pic {
    height: 260px;
  }
  .text-card {
    margin-left: 30px;
  }
  .title {
    font-size: 24px;
    margin: 20px 15px;
  }
  .name {
    font-size: 80px;
    margin: 0;
  }
  .description {
    color: #b3b3b3;
    font-weight: 200;
  }
  .buttons-container {
    display: flex;
    align-items: center;
  }
  .play-btn {
    padding: 15px 20px;
    background-color: #1db954;
    border: none;
    border-radius: 50%;
    margin: 0 10px;
  }
  .play-img {
    width: 20px;
  }
  .playlist-container {
    margin: 40px 0;
  }
  .playlist-menu-btn {
    background-color: transparent;
    border: none;
    margin: 0 10px;
  }
  .playlist-menu-img {
    width: 25px;
  }
  .playlist-menu-list {
    position: absolute;
    background-color: #131413;
    padding: 15px;
    border-radius: 8px;
  }
  .menu-btn {
    background-color: transparent;
    color: #b3b3b3;
    padding: 10px 0;
    font-weight: 300;
    border: none;
  }
  .song-container {
    padding: 15px 0;
    display: grid;
    grid-template-columns: 20px 1fr;
  }
  .music-icon {
    width: 15px;
  }
  .song-wrapper {
    margin-left: 10px;
  }
  .song-title {
    font-size: 16px;
    margin: 0;
  }
  .artists-container {
    display: flex;
    flex-direction: row;
  }
  .artist {
    font-size: 12px;
    color: #b3b3b3;
    padding: 0 4px;
  }
`;

export default StyledPlaylist;
