import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { IActions } from "./actions";
import reducer, { initialState, IState } from "./reducers";

export const initializeStore = (
  preloadedState: IState = initialState
): Store<IState, IActions> => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
