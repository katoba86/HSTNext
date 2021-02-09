"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
const actionTypes_1 = require("../actions/actionTypes");
const initialState = {
    modal: false,
    name: "Kai",
};
exports.userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes_1.SET_MODAL:
            return Object.assign(Object.assign({}, state), { modal: action.toggle });
        case actionTypes_1.SET_NAME:
            return Object.assign(Object.assign({}, state), { name: action.name });
        default:
            return state;
    }
};
