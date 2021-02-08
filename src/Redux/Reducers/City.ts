import { ICityActions, SET_ORIGIN } from "../actions/actionTypes";

const initialState = {
    origin: {
        name: "Hamm (Westf.)",
    },
};

export const cityReducer = (state = initialState, action: ICityActions) => {
    switch (action.type) {
        case SET_ORIGIN:
            return {
                ...state,
                origin: action.city,
            };
        default:
            return state;
    }
};
