import { SET_MODAL, SET_NAME, UserActions } from "../actions/actionTypes";
import { UserState } from "../../type";

const initialState: UserState = {
    modal: false,
    name: "Kai",
};

export const userReducer = (
    state: UserState = initialState,
    action: UserActions
) => {
    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                modal: action.toggle,
            };
        case SET_NAME:
            return {
                ...state,
                name: action.name,
            };
        default:
            return state;
    }
};
