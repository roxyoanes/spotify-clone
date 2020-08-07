import styled from "@emotion/styled";

interface IProps {
  opensidebar: boolean;
}

const StyledSidebar = styled.div<IProps>`
  background-color: black;
  color: #b3b3b3;
  display: ${({ opensidebar }) => (opensidebar === true ? "block" : "none")};

  .sidebar-wrapper {
    position: fixed;
  }
  .logo-container {
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
    margin: 20px 0;
  }

  .link {
    font-size: 15px;
    padding: 4px 0;
  }

  .title {
    text-align: left;
    font-size: 14px;
    margin: 15px 5px 20px 15px;
  }

  .footer {
    position: sticky;
    text-align: center;
    padding: 12px 0;
  }
`;

export default StyledSidebar;
