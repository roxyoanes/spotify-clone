import { IProfileData } from "../types";

interface ISetLoginAction {
  type: "SET_LOGIN";
  payload: boolean;
}

export const setLoginAction = (data: boolean): ISetLoginAction => ({
  type: "SET_LOGIN",
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

export type IActions = ISetLoginAction | ISetProfileDataAction;
