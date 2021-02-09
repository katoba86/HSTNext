"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityReducer = void 0;
const actionTypes_1 = require("../actions/actionTypes");
const initialState = {
    origin: {
        name: "Hamm (Westf.)",
    },
};
exports.cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes_1.SET_ORIGIN:
            return Object.assign(Object.assign({}, state), { origin: action.city });
        default:
            return state;
    }
};
