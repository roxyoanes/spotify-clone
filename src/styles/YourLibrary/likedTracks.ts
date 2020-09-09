import styled from "@emotion/styled";

const StyledLikedTracks = styled.div`
  color: white;
  background-color: #131413;

  .button-container {
    display: flex;
    align-items: center;
    padding: 40px;
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
  .tracks-header {
    color: #b3b3b3;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    display: grid;
    grid-template-columns: 4fr repeat(2, 2fr) 1fr;
    align-items: center;
    padding: 0 40px;
  }
  .icon {
    height: 80px;
  }

  .tracks-wrapper {
    padding: 15px 30px;
  }
  .card {
    border-radius: 15px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 4fr repeat(2, 2fr) 1fr;
    align-items: center;
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
  .clock-icon {
    height: 20px;
  }
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
  .song-duration-wrapper {
    display: flex;
    align-items: center;
  }
  .song-name {
    font-size: 16px;
    margin: 0;
  }
  .artists-container {
    display: flex;
  }
  .artist-name {
    font-size: 14px;
    margin: 5px 0;
  }

  .heart-icon {
    height: 20px;
    color: #1db954;
    margin-right: 10px;
  }
`;

export default StyledLikedTracks;
