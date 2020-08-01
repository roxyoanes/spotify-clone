import { IActions, ISpotifyTokens } from "./actions";
import { IProfileData } from "../types";

export interface IState {
  spotify: ISpotifyTokens;
  profile?: IProfileData;
}

export const initialState: IState = {
  spotify: {
    access_token: "",
    refresh_token: "",
  },
  profile: undefined,
};

const reducer = (state: IState = initialState, action: IActions): IState => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        spotify: action.payload,
      };
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
