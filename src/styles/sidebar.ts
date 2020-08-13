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

  .icon-plus {
    background-color: #b3b3b3;
    width: 8%;
    margin-right: 15px;
    padding: 5px;
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
