import spotifyApi from "../../../src/server/spotifyApi";

export default (req, res) => {
  const {
    query: { name },
  } = req;

  spotifyApi
    .createPlaylist(name, {
      public: false,
    })
    .then(
      (data) => {
        console.log("Created playlist!");
      },
      (err) => {
        console.log("Something went wrong creating a playlist!", err);
      }
    );
};
