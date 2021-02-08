import { Dispatch } from "redux";
import { SET_ORIGIN } from "./actionTypes";
import { City } from "../../type";

export const setOriginSync = (origin: City) => {
    return {
        type: SET_ORIGIN,
        origin,
    };
};

export const setOrigin = (origin: City) => {
    console.log("Setting origin to", origin);
    return (dispatch: Dispatch) => {
        // where = where + ' '+getState().user.user;
        setTimeout(() => {
            dispatch(setOriginSync(origin));
        }, 2000);
    };
};
