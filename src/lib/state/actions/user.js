import {HAVE_FUN} from "./actionTypes";

export const haveFun = (who) => {
    return {
        type:HAVE_FUN,
        name:who
    }
}