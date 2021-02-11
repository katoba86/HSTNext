"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapper = exports.initStore = void 0;
const redux_1 = require("redux");
const next_redux_wrapper_1 = require("next-redux-wrapper");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducer_1 = require("./reducer");
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line global-require
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(redux_1.applyMiddleware(...middleware));
    }
    return redux_1.applyMiddleware(...middleware);
};
const loggerMiddleware = ({ getState }) => (next) => action => {
    const returnValue = next(action);
    // eslint-disable-next-line no-console
    console.log("state after dispatch", getState());
    return returnValue;
};
exports.initStore = () => {
    return redux_1.createStore(reducer_1.rootReducer, bindMiddleware([loggerMiddleware, redux_thunk_1.default]));
};
exports.wrapper = next_redux_wrapper_1.createWrapper(exports.initStore, {
    debug: true,
});
