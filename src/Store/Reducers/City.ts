import {SET_ORIGIN} from "../actions/actionTypes";

const initialState = {

    origin:{
        name:'Hamm (Westf.)'
    }
}

const reducer = (state = initialState,action) => {

    switch(action.type){

        case SET_ORIGIN:
            return {
                ...state,
                origin:action.origin
            }
    }
    return state;
}

export default reducer;