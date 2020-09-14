import styled from "@emotion/styled";

const StyledPlaylistCollection = styled.div`
  color: white;
  padding: 20px 30px;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    grid-gap: 20px;
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
  .card-title {
    margin: 20px;
    font-size: 20px;
    color: white;
  }
  .card-img {
    width: 160px;
    height: 165px;
  }
  .playlist-name {
    color: white;
    font-size: 15px;
    margin: 25px 0 14px;
  }
`;

export default StyledPlaylistCollection;
