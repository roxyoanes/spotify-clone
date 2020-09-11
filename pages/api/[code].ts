import { withIronSession } from "next-iron-session";

import { getAuthorizationCode } from "../../src/server/spotifyApi";

const handler = (req, res) => {
  const {
    query: { code },
  } = req;

  getAuthorizationCode(code)
    .then(({ access_token, refresh_token }) => {
      req.session.set("token", {
        access_token,
        refresh_token,
      });
      req.session.save().then(() => res.send("Logged in"));
    })
    .catch((err) => {
      console.log("Something went wrong!", err);
      res.send(err);
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
