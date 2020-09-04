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

  .btn {
    background: transparent;
    border-color: transparent;
    color: white;
    cursor: pointer;
  }
`;

export default StyledCreatePlaylist;
