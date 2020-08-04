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
  .cards-container {
    display: grid;
    grid-template-columns: repeat(5, 220px);
    justify-content: center;
    grid-gap: 30px;
  }
  .card {
    background-color: #212121;
    border-radius: 15px;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-title {
    margin: 20px;
    font-size: 20px;
    color: white;
  }
  .card-img {
    width: 160px;
    height: 165px;
  }
  .playlist-name {
    color: white;
    font-size: 15px;
    margin: 25px 0 14px;
  }
`;

export default StyledUserProfile;
