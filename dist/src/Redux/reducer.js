"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.combinedReducer = void 0;
const redux_1 = require("redux");
const next_redux_wrapper_1 = require("next-redux-wrapper");
const City_1 = require("@Reducers/City");
const User_1 = require("@Reducers/User");
exports.combinedReducer = redux_1.combineReducers({
    city: City_1.cityReducer,
    user: User_1.userReducer,
});
exports.rootReducer = (state, action) => {
    switch (action.type) {
        case next_redux_wrapper_1.HYDRATE:
            return action.payload;
        default: {
            // @ts-ignore
            return exports.combinedReducer(state, action);
        }
    }
};
