import styled from "@emotion/styled";

const StyledUserProfile = styled.div`
  background-color: #131413;
  color: white;

  .container {
    margin: 30px;
  }
  .profile-card {
    display: flex;
    align-items: end;
  }
  .profile-pic {
    border-radius: 50%;
    height: 260px;
  }
  .text-card {
    margin-left: 30px;
  }
  .title {
    margin: 10px 0;
  }
  .name {
    font-size: 80px;
    margin: 0;
  }
  .followers {
    color: #b3b3b3;
    font-size: 14px;
    margin: 10px 0;
  }
`;

export default StyledUserProfile;
