import styled from "@emotion/styled";

const StyledAlbumTracks = styled.div`
  h3 {
    font-size: 16px;
  }
  h5 {
    color: #b3b3b3;
    font-weight: 200;
    font-size: 14px;
    margin: 5px 0;
  }
  .buttons-container {
    display: flex;
    align-items: center;
    padding: 0 30px;
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
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
    padding: 0 40px;
    margin: 30px 0;
  }
  .icon-wrapper {
    text-align: end;
  }
  .clock-icon {
    height: 20px;
  }
  .song-container {
    border-radius: 15px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 6fr 1fr;
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
    font-size: 18px;
    color: #b3b3b3;
    margin: 0 10px;
    padding-right: 20px;
    font-weight: 200;
  }
  .song-image {
    height: 50px;
  }

  .name {
    font-size: 16px;
    margin: 10px 20px;
    font-weight: 200;
  }
  .song-duration-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .heart-icon {
    height: 20px;
    color: #1db954;
    margin-right: 10px;
  }

  .info-artist {
    font-size: 14px;
    margin: 10px 0;
    color: #b3b3b3;
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

export default StyledAlbumTracks;
