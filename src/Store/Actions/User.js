import {HAVE_FUN, MODAL} from "./actionTypes";

export const haveFun = (who) => {
    return {
        type:HAVE_FUN,
        name:who
    }
}
export const setModal = (toggle) => {
    return {
        type:MODAL,
        open:toggle
    }
}