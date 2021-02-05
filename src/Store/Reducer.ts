import { AnyAction, combineReducers, Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "@Interfaces/AppState";
// import cityReducer from "./Reducers/City";
import { userReducer } from "./Reducers/User";

const rootReducer: Reducer<AppState, AnyAction> = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                // city: cityReducer,
                user: userReducer,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;
