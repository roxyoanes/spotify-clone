import styled from "@emotion/styled";

const StyledLikedTracks = styled.div`
  color: white;
  background-color: #131413;

  .container {
    padding: 40px;
  }
  .wrapper-header {
    display: flex;
    align-items: center;
  }
  .icon-background {
    background: linear-gradient(135deg, #450af5, #c4efd9);
    padding: 55px;
  }

  .icon {
    height: 80px;
  }
  .card-title {
    font-size: 65px;
    margin: 10px 0;
  }
  .card {
    border-radius: 15px;
    padding: 15px 0;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
  }
  .card-title {
    display: flex;
    align-items: center;
  }
  .user-pic {
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .button-container {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  .tracks-header {
    color: #b3b3b3;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
  }

  .clock-icon {
    height: 20px;
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
  .text-card {
    padding: 20px 40px;
  }
  .user-info-container {
    display: flex;
    align-items: center;
  }
  .user-name {
    font-weight: 700;
    font-size: 14px;
  }
  .info-artist {
    color: #b3b3b3;
    font-size: 14px;
    margin: 10px 0;
  }
  .song-name {
    color: white;
    font-size: 16px;
    margin: 0;
  }
  .tracks-pic {
    height: 60px;
  }
`;

export default StyledLikedTracks;
