import styled from "@emotion/styled";

const StyledPlaylist = styled.div`
  color: white;
  padding: 20px 30px;

  .playlist-main {
    display: flex;
    align-items: end;
  }
  .playlist-pic {
    height: 260px;
  }
  .text-card {
    margin-left: 30px;
  }
  .title {
    font-size: 24px;
    margin: 20px 15px;
  }
  .name {
    font-size: 80px;
    margin: 0;
  }
  .description {
    color: #b3b3b3;
    font-weight: 200;
  }
  .playlist-container {
    margin: 40px 0;
  }
  .song-container {
    padding: 15px 0;
  }
  .song-title {
    font-size: 16px;
    margin: 0;
  }
  .artists-container {
    display: flex;
    flex-direction: row;
  }
  .artist {
    font-size: 12px;
    color: #b3b3b3;
    padding: 0 4px;
  }
`;

export default StyledPlaylist;
