"use strict";
//import { AnyAction } from "redux";
//import { getUser } from "@Api/Index";
//import { ThunkDispatch } from "redux-thunk";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setName = exports.setModal = void 0;
const actionTypes_1 = require("./actionTypes");
exports.setModal = (toggle) => {
    return {
        type: actionTypes_1.SET_MODAL,
        toggle,
    };
};
exports.setName = (name) => {
    return {
        name,
        type: actionTypes_1.SET_NAME,
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
