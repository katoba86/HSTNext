"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNameAsync = exports.setName = exports.setModal = void 0;
const Index_1 = require("@Api/Index");
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
exports.setNameAsync = () => {
    return async (dispatch) => {
        const user = await Index_1.getUser();
        const { name } = await user.json();
        dispatch(exports.setName(name));
    };
};
