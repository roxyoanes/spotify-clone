import styled from "@emotion/styled";

interface IProps {
  opensidebar: boolean;
}

const StyledSidebar = styled.div<IProps>`
  background-color: black;
  color: #b3b3b3;
  display: ${({ opensidebar }) => (opensidebar === true ? "block" : "none")};

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }

  .logo {
    width: 60%;
  }

  .links-container,
  .playlist-container {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 20px;
  }

  .link {
    font-size: 14px;
    padding: 4px 0;
  }

  .title {
    text-align: left;
    font-family: 14px;
    margin: 15px 5px 20px 15px;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100px;
    text-align: center;
    padding: 12px 0;
  }
`;

export default StyledSidebar;
