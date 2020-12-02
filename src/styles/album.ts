import styled from "@emotion/styled";

const StyledAlbum = styled.div`
  color: white;

  .album-main {
    display: flex;
    align-items: end;
    padding: 40px 30px;
  }
  .album-pic {
    height: 260px;
  }
  .text-card {
    margin-left: 30px;
  }
  .album-type {
    font-size: 14px;
    margin: 20px 15px;
    text-transform: uppercase;
  }
  .name {
    font-size: 80px;
    margin: 0;
  }
  .info-artist {
    font-size: 14px;
    margin: 10px 0;
    font-weight: 600;
  }
`;

export default StyledAlbum;
