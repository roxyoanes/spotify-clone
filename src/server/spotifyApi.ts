import SpotifyWebApi from "spotify-web-api-node";

export const scopes = ["user-read-private", "user-read-email"],
  redirectUri = "http://localhost:3000",
  clientId = process.env.CLIENT_ID,
  clientSecret = process.env.CLIENT_SECRET;

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
export const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret,
});

export const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
