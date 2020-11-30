import { initializeSpotifyApi } from "../../../src/server/spotifyApi";
import { withIronSession } from "next-iron-session";

const handler = async (req, res) => {
  const token = req.session.get("token");
  const {
    query: { artistId },
  } = req;

  const isLoggedIn = !!token;

  if (isLoggedIn) {
    const spotifyApi = initializeSpotifyApi(token);

    try {
      const relatedArtists = await spotifyApi.getArtistRelatedArtists(artistId);
      res.json({
        relatedArtists: relatedArtists.body,
      });
    } catch (err) {
      res.send(err);
    }
  }
  res.json({
    isLoggedIn,
  });
};

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  // if your localhost is served on http:// then disable the secure flag
  cookieName: "token",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
