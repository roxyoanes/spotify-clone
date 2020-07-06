import styled from "@emotion/styled";

const StyledPlaylists = styled.div`
  background-color: #131413;
  color: #b3b3b3;

  .login {
    background-color: #fff;
    color: black;
    font-size: 10px;
    padding: 8px 24px;
  }
  .card-title {
    margin: 20px;
    font-size: 20px;
    color: white;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(5, 220px);
    justify-content: center;
    grid-gap: 30px;
    margin: 0 20px;
  }
  .card {
    background-color: #212121;
    border-radius: 15px;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-img {
    width: 160px;
    height: 165px;
  }
  .text-wrapper {
    color: #b3b3b3;
  }
  .playlist-name {
    color: white;
    font-size: 15px;
    margin: 25px 0 14px;
  }
  .description {
    font-size: 12px;
    font-weight: 200;
    width: 160px;
    word-wrap: break-word;
  }
`;

export default StyledPlaylists;
