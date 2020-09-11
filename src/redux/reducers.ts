import { IActions } from "./actions";
import { IProfileData } from "../types";

export interface IState {
  isLoggedIn: boolean;
  profile?: IProfileData;
}

export const initialState: IState = {
  isLoggedIn: false,
  profile: undefined,
};

const reducer = (state: IState = initialState, action: IActions): IState => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload,
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
