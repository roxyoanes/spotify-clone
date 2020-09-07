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
    width: 20%;
  }
  .main-container {
    padding: 20px;
  }

  .logo {
    width: 60%;
  }

  .icon {
    width: 10%;
    margin-right: 15px;
  }

  .h-icon {
    width: 7%;
    margin-right: 15px;
    background: linear-gradient(135deg, #450af5, #c4efd9);
    padding: 10px;
  }

  .icon-plus {
    background-color: #b3b3b3;
    width: 6%;
    margin-right: 15px;
    padding: 10px;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  .link {
    font-size: 15px;
    padding: 10px 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: #b3b3b3;

    &:hover {
      color: white;
    }
  }

  .title {
    font-size: 14px;
    margin: 20px 0;
  }

  .footer {
    padding: 12px 0;
  }
`;

export default StyledSidebar;
