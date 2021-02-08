import {
    createStore,
    applyMiddleware,
    MiddlewareAPI,
    Dispatch,
    Middleware,
} from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducer";

const bindMiddleware = (middleware: Middleware<Dispatch, any, any>[]) => {
    if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line global-require
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
    next: Dispatch
) => action => {
    const returnValue = next(action);
    // eslint-disable-next-line no-console
    console.log("state after dispatch", getState());
    return returnValue;
};

const initStore = () => {
    return createStore(
        rootReducer,
        bindMiddleware([loggerMiddleware, thunkMiddleware])
    );
};

export const wrapper = createWrapper(initStore, {
    debug: true,
});
