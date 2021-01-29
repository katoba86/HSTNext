import {HAVE_FUN} from "../actions/actionTypes";

const initialState = {

    user:'Kai'
}

const cityReducer = (state = initialState,action) => {

    switch(action.type){
        case HAVE_FUN:
            return {
                ...state,
                user:action.name
            }
    }
    return state;
}

export default cityReducer;