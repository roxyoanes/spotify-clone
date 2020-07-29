import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { IActions, ISpotifyTokens } from "./types";

export interface IState {
  spotify: ISpotifyTokens;
  profile: string;
}

const initialState: IState = {
  spotify: {
    access_token: "",
    refresh_token: "",
  },
  profile: "",
};

const reducer = (state: IState = initialState, action: IActions): IState => {
  switch (action.type as any) {
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

export const initializeStore = (
  preloadedState: IState = initialState
): Store<IState, IActions> => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
