//import { AnyAction } from "redux";
//import { getUser } from "@Api/Index";
//import { ThunkDispatch } from "redux-thunk";

import {
    IUserSetModal,
    IUserSetNameAction,
    SET_MODAL,
    SET_NAME,
} from "./actionTypes";
import { ThunkType } from "../../type";

export const setModal = (toggle: boolean): IUserSetModal => {
    return {
        type: SET_MODAL,
        toggle,
    };
};

export const setName = (name: string): IUserSetNameAction => {
    return {
        name,
        type: SET_NAME,
    };
};
/*
export const setNameAsync = (): ThunkType => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const user = await getUser();
        const { name } = await user.json();
        dispatch(setName(name));
    };
};
*/
