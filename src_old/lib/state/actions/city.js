import {SET_ORIGIN} from "./actionTypes";

export const setOriginSync = (origin) => {
    return {
        type:SET_ORIGIN,
        origin:origin
    }
}

export const setOrigin = (origin) => {
        console.log("Setting origin to",origin);
    return (dispatch,getState) => {

        //where = where + ' '+getState().user.user;
        setTimeout(()=>{
            dispatch(setOriginSync(origin));
        },2000);
    }
}