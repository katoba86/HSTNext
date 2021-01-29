import {SET_ORIGIN} from "./actionTypes";

const setOriginSync = (where) => {
    return {
        type:SET_ORIGIN,
        to:where
    }
}

export const setOrigin = (where) => {

    return (dispatch,getState) => {

        where = where + ' '+getState().user.user;
        setTimeout(()=>{
            dispatch(setOriginSync(where));
        },2000);
    }
}