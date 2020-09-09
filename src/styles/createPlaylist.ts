import styled from "@emotion/styled";

const StyledCreatePlaylist = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
  position: fixed;
  background-color: rgba(2, 2, 7, 0.9);
  color: white;
  padding: 80px 0;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn {
    background: transparent;
    border-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 50px;
  }
  .title {
    font-size: 50px;
    font-weight: 600;
    margin: 10px 0;
  }
  .playlist-input {
    background-color: #282828;
    padding: 30px 20%;
  }
  .input-title {
    margin: 10px 0;
  }
  .input {
    background-color: #282828;
    border: none;
    color: white;
    font-size: 48px;
    font-weight: 600;
    caret-color: #1db954;
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  .input-btn {
    font-size: 12px;
    letter-spacing: 1.76px;
    color: #fff;
    border-radius: 35px;
    padding: 10px 30px;
    margin: 0 10px;
  }
  .cancel-btn {
    background-color: transparent;
    border: 1px solid #535353;
  }
  .create-btn {
    background-color: #1db954;
    border: none;
  }
`;

export default StyledCreatePlaylist;
