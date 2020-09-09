import { getAuthorizationCode } from "../../src/server/spotifyApi";

export default (req, res) => {
  const {
    query: { code },
  } = req;

  getAuthorizationCode(code)
    .then(({ access_token, refresh_token }) => {
      res.json({
        access_token,
        refresh_token,
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
