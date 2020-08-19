import { IProfileData, IAlbum } from "../types";

export interface ISpotifyTokens {
  access_token: string;
  refresh_token: string;
}

interface ISetTokenAction {
  type: "SET_TOKEN";
  payload: ISpotifyTokens;
}

export const setTokenAction = (data: ISpotifyTokens): ISetTokenAction => ({
  type: "SET_TOKEN",
  payload: data,
});

interface ISetProfileDataAction {
  type: "SET_PROFILE";
  payload: IProfileData;
}

export const setProfileDataAction = (
  data: IProfileData
): ISetProfileDataAction => ({
  type: "SET_PROFILE",
  payload: data,
});

export type IActions = ISetTokenAction | ISetProfileDataAction;
