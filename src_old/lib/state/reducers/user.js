import {HAVE_FUN, MODAL} from "../actions/actionTypes";

const initialState = {
    modal:false,
    user:'Kai'
}

const userReducer = (state = initialState,action) => {

    switch(action.type){
        case MODAL:
            return {
                ...state,
                modal:action.open
            }
        case HAVE_FUN:
            return {
                ...state,
                user:action.name
            }
    }
    return state;
}

export default userReducer;