import styled from "@emotion/styled";

const StyledSidebar = styled.div`
  background-color: black;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }

  .logo {
    width: 60%;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 20px;
  }
`;

export default StyledSidebar;
