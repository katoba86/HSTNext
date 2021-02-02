
export const CHANGE_NAME = 'APP/CHANGE_NAME';
export const SET_MODAL = 'APP/SET_MODAL';
export const SET_ORIGIN = 'APP/SET_ORIGIN';

export const initialState = {
    modal:false,
    name:'Silvia',
    child:'Yannick',
    origin:null,
}
export const setOrigin = (city) => ({
   type:SET_ORIGIN,
   city
});

export const setModal = (isOpen) => ({
   type:SET_MODAL,
   isOpen
});

export const changeName = (name) => ({
    type:CHANGE_NAME,
    name:name
});

export const nameReducer = (state = initialState,action) => {
    if(action.type === SET_ORIGIN){
        return {
            ...state,
            origin: action.city
        }
    }

    if(action.type === CHANGE_NAME){
        return {
            ...state,
            name:action.name
        }
    }
    if(action.type === SET_MODAL){
        return {
            ...state,
            modal:action.isOpen
        }
    }
}