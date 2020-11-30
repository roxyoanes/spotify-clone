import styled from "@emotion/styled";

const StyledRelatedArtists = styled.div`
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
  .related-artists-container {
    padding: 40px 30px;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
  .related-artist-card {
    background-color: #212121;
    border-radius: 15px;
    padding: 15px;
    display: grid;
    cursor: pointer;
  }
  .artist-img {
    height: 200px;
  }
  .name {
    margin: 20px 0 8px 0;
  }
  .type {
    display: flex;
    margin: 0;
    text-transform: capitalize;
  }
`;

export default StyledRelatedArtists;
