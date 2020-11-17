import styled from "@emotion/styled";

const StyledPopularTracks = styled.div`
  color: white;
  padding: 20px 30px;

  p {
    font-size: 20px;
    margin: 0;
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
  .song-container {
    border-radius: 15px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 6fr 2fr;
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
  .song-image {
    height: 40px;
  }

  .name {
    font-size: 14px;
    margin: 10px 0;
    color: #b3b3b3;
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

export default StyledPopularTracks;
