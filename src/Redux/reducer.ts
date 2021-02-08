import { AnyAction, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { cityReducer } from "@Reducers/City";
import { userReducer } from "@Reducers/User";

export const combinedReducer = combineReducers({
    city: cityReducer,
    user: userReducer,
});

export const rootReducer = (state: any, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            // @ts-ignore
            return combinedReducer(state, action);
        }
    }
};
export type ApplicationState = ReturnType<typeof rootReducer>;
