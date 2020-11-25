import styled from "@emotion/styled";

const StyledArtistAlbums = styled.div`
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

  .album-img {
    height: 180px;
  }
`;

export default StyledArtistAlbums;
