import styled from "@emotion/styled";

const StyledLikedTracks = styled.div`
  color: white;
  background-color: #131413;

  .wrapper-header {
    display: flex;
    align-items: center;
    padding: 40px;
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
    background-color: #212121;
    border-radius: 15px;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  .user-pic {
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
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
`;

export default StyledLikedTracks;
