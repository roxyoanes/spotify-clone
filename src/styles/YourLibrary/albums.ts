import styled from "@emotion/styled";

const StyledAlbums = styled.div`
  color: white;
  background-color: #131413;

  .albums-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    grid-gap: 30px;
    margin: 0 20px;
    padding-bottom: 40px;
  }
  .card-title {
    margin: 20px 30px;
    font-size: 24px;
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
  .album-pic {
    height: 125px;
  }
  .text-card {
    margin-top: 14px;
  }
  .name {
    font-size: 14px;
    margin: 0;
  }
  .info-artist {
    color: #b3b3b3;
    font-size: 14px;
    margin: 10px 0;
  }
`;

export default StyledAlbums;
