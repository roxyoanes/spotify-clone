import styled from "@emotion/styled";

const StyledLikedTracksHeader = styled.div`
  color: white;

  .wrapper-header {
    display: flex;
    align-items: center;
    padding: 40px 60px;
  }
  .icon-background {
    background: linear-gradient(135deg, #450af5, #c4efd9);
    padding: 55px;
  }
  .icon {
    height: 80px;
  }
  .text-card {
    padding: 20px 40px;
  }
  .card-title {
    font-size: 65px;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  .user-info-container {
    display: flex;
    align-items: center;
  }

  .user-pic {
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-name {
    font-weight: 700;
    font-size: 14px;
  }
`;

export default StyledLikedTracksHeader;
