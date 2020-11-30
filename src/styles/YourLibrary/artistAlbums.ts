import styled from "@emotion/styled";

const StyledArtistAlbums = styled.div`
  h3 {
    font-size: 16px;
  }
  h5 {
    color: #b3b3b3;
    font-weight: 200;
    font-size: 14px;
    margin: 5px 0;
  }
  .title {
    padding: 20px 0;
    font-size: 26px;
    font-weight: 600;
    margin: 0;
  }
  .artist-album-container {
    padding: 40px 30px;
  }
  .album-cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
  .album-card {
    background-color: #212121;
    border-radius: 15px;
    padding: 15px;
    display: grid;
    cursor: pointer;
  }

  .album-img {
    height: 200px;
  }
  .card-text {
    display: flex;
  }
  .type::before {
    content: "•";
    margin: 4px;
    color: #b3b3b3;
  }
  .type {
    display: flex;
  }
`;

export default StyledArtistAlbums;
