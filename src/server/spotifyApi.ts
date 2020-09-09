import SpotifyWebApi from "spotify-web-api-node";

export const scopes = [
    "user-read-private",
    "user-read-email",
    "user-library-read",
    "user-read-recently-played",
    "user-read-private",
    "user-follow-read",
    "playlist-modify-private",
  ],
  redirectUri = "http://localhost:3000/login",
  clientId = process.env.CLIENT_ID,
  clientSecret = process.env.CLIENT_SECRET;

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret,
});

export const authorizeURL = spotifyApi.createAuthorizeURL(scopes);

export const getAuthorizationCode = (code: string) => {
  return spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.setRefreshToken(data.body["refresh_token"]);

      return {
        access_token: data.body["access_token"],
        refresh_token: data.body["refresh_token"],
      };
    })
    .catch((err) => {
      return err;
    });
};

export default spotifyApi;
