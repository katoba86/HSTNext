import {combineReducers} from "redux";
import cityReducer from "./reducers/city";
import userReducer from "./reducers/user";
import {HYDRATE} from "next-redux-wrapper";


const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                city:cityReducer,
                user:userReducer
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;

