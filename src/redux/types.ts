export interface ISpotifyTokens {
  access_token: string;
  refresh_token: string;
}

interface ISetToken {
  type: "SET_TOKEN";
  payload: ISpotifyTokens;
}

export type IActions = ISetToken;
