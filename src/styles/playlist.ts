import styled from "@emotion/styled";

const StyledPlaylist = styled.div`
  color: white;

  .playlist-main {
    display: flex;
    align-items: end;
    margin: 40px;
  }
  .playlist-pic {
    height: 260px;
  }
  .first-text-card {
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
    margin: 40px;
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
    background-color: #282828;
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
  .tracks-header {
    color: #b3b3b3;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    display: grid;
    grid-template-columns: 3fr 2fr 0.5fr;
    align-items: center;
  }

  .clock-icon {
    height: 20px;
  }
  .song-container {
    border-radius: 15px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 3fr 2fr 0.5fr;
    align-items: center;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.1);
    }
  }
  .card-title {
    font-size: 65px;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  .song-index {
    font-size: 16px;
    color: #b3b3b3;
    margin: 0;
    padding-right: 20px;
    font-weight: 200;
  }
  /*  .music-icon {
    width: 15px;
  } */
  .text-card {
    padding: 0 20px;
  }
  .tracks-pic {
    height: 40px;
  }

  .info-artist {
    font-size: 14px;
    margin: 10px 0;
    color: #b3b3b3;
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
    color: #b3b3b3;
    padding: 0 4px;
    font-size: 14px;
    margin: 5px 0;
  }
  .song-duration-wrapper {
    display: flex;
    align-items: center;
  }
  .heart-icon {
    height: 20px;
    color: #1db954;
    margin-right: 10px;
  }

  .song-menu-img {
    width: 25px;
  }

  .song-menu-list {
    position: absolute;
    background-color: #282828;
    padding: 15px;
    border-radius: 5px;
    right: 55px;
  }
  .song-menu-btn {
    background-color: transparent;
    color: #b3b3b3;
    padding: 10px 0;
    border: none;
    margin: 0 10px;
  }
`;

export default StyledPlaylist;
