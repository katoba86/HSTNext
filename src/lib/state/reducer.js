import {combineReducers} from "redux";
import cityReducer from "./reducers/city";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
    city:cityReducer,
    user:userReducer
});
export default rootReducer;