import { withIronSession } from "next-iron-session";

import { initializeSpotifyApi } from "../../src/server/spotifyApi";
import { IAlbum, IPlaylist } from "../../src/types";

interface IPlaylists {
  [key: string]: IPlaylist[];
}

const handler = async (req, res) => {
  const token = req.session.get("token");

  const isLoggedIn = !!token;

  if (isLoggedIn) {
    try {
      const spotifyApi = initializeSpotifyApi(token);
      const releasesList = await spotifyApi.getNewReleases({
        limit: 5,
        offset: 0,
        country: "ES",
      });
      const data = await spotifyApi.getNewReleases([
        releasesList.body.albums.items.map((el) => el.id),
      ]);
      const newReleases: IAlbum[] = data.body.albums.items.slice(0, 5);

      const playlists: IPlaylists = {};

      const category = await spotifyApi.getPlaylistsForCategory("party", {
        limit: 5,
        offset: 0,
      });
      playlists.Party = category.body.playlists.items;

      const featured = await spotifyApi.getFeaturedPlaylists({
        limit: 5,
        offset: 1,
      });
      playlists.Featured = featured.body.playlists.items;

      const chillPlaylist = await spotifyApi.getPlaylistsForCategory("chill", {
        limit: 5,
        offset: 0,
      });
      playlists.Chill = chillPlaylist.body.playlists.items;

      const hipHopPlaylist = await spotifyApi.getPlaylistsForCategory(
        "hiphop",
        {
          limit: 5,
          offset: 0,
        }
      );
      playlists.HipHop = hipHopPlaylist.body.playlists.items;

      const popPlaylist = await spotifyApi.getPlaylistsForCategory("pop", {
        limit: 5,
        offset: 0,
      });
      playlists.Pop = popPlaylist.body.playlists.items;

      const workout = await spotifyApi.getPlaylistsForCategory("workout", {
        limit: 5,
        offset: 0,
      });
      playlists.Workout = workout.body.playlists.items;

      res.json({
        isLoggedIn,
        newReleases,
        playlists,
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
