import { createStore, applyMiddleware } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppState } from "@Interfaces/AppState";
import rootReducer from "./Reducer";

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
};

export const storeWrapper = createWrapper(initStore);
