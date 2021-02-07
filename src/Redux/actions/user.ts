import {IUserSetModal, IUserSetNameAction, SET_MODAL, SET_NAME} from "./actionTypes";


export const setModal = (toggle:boolean):IUserSetModal => {
    return {
        type:SET_MODAL,
        toggle:toggle
    }
}


export const setName = (name:string):IUserSetNameAction => {
    return {
       name:name,
        type:SET_NAME
    }
}
