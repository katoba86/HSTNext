import {AnyAction,  combineReducers} from "redux";
import cityReducer from "./reducers/city";
import userReducer from "./reducers/user";
import {HYDRATE} from "next-redux-wrapper";



export const combinedReducer = combineReducers({
    city:cityReducer,
    user:userReducer
});

const rootReducer = (state:any, action:AnyAction) => {
    console.log("Received action",action);
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            return combinedReducer(state, action);
        }
    }
};
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

