import {SET_ORIGIN} from "./actionTypes";
import {City} from "../../type";
import {Dispatch} from "redux";

export const setOriginSync = (origin:City) => {
    return {
        type:SET_ORIGIN,
        origin:origin
    }
}

export const setOrigin = (origin:City) => {
        console.log("Setting origin to",origin);
    return (dispatch:Dispatch) => {

        //where = where + ' '+getState().user.user;
        setTimeout(()=>{
            dispatch(setOriginSync(origin));
        },2000);
    }
}
