import { spotifyApi } from "../../src/server/spotifyApi";

export default (req, res) => {
  const {
    query: { code },
  } = req;

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.setRefreshToken(data.body["refresh_token"]);

      res.json({
        access_token: data.body["access_token"],
        refresh_token: data.body["refresh_token"],
      });
    })
    .catch((err) => {
      console.log("Something went wrong!", err);
      res.send(err);
    });
};

/* const a = (d: string): void => console.log(d);

const b = (d: string): string => d;

type cType = (d: string) => void;

const c: cType = (d) => console.log(d);

type dType = (d: string) => string;

const d: dType = (d) => d;

interface ILili {
  text: string;
}

const g: ILili = { text: "aa" }; */
