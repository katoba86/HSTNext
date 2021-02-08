import { City } from "../../type";

export const SET_ORIGIN = "SET_ORIGIN";
export const SET_NAME = "SET_NAME";
export const SET_MODAL = "SET_MODAL";

export interface IUserSetNameAction {
    readonly type: typeof SET_NAME;
    name: string;
}
export interface IUserSetModal {
    readonly type: typeof SET_MODAL;
    toggle: boolean;
}
export type UserActions = IUserSetNameAction | IUserSetModal;

export interface ICitySetLocation {
    readonly type: string;
    city: City;
}

export type ICityActions = ICitySetLocation;
