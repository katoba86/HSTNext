"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOrigin = exports.setOriginSync = void 0;
const actionTypes_1 = require("./actionTypes");
exports.setOriginSync = (origin) => {
    return {
        type: actionTypes_1.SET_ORIGIN,
        origin,
    };
};
exports.setOrigin = (origin) => {
    console.log("Setting origin to", origin);
    return (dispatch) => {
        // where = where + ' '+getState().user.user;
        setTimeout(() => {
            dispatch(exports.setOriginSync(origin));
        }, 2000);
    };
};
