import styled from "@emotion/styled";

const StyledFollowedArtists = styled.div`
  color: white;
  background-color: #131413;

  .artists-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 15px 0;
    cursor: pointer;
    background-color: #191919;

    &:hover {
      background-color: #212121;
    }
  }

  .artist-pic {
    height: 180px;
    border-radius: 50%;
    width: 180px;
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

export default StyledFollowedArtists;
