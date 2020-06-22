import { NextPage } from "next";

import { spotifyApi } from "../src/server/spotifyApi";

const Profile: NextPage<any> = (props) => {
  console.log(props);
  return <div>{JSON.stringify(props)}</div>;
};

Profile.getInitialProps = async () => {
  const profileData = await spotifyApi.getMe();

  return profileData;
  console.log("ddd", profileData);
};

export default Profile;
