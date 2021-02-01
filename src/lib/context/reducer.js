
export const CHANGE_NAME = 'APP/CHANGE_NAME';

export const initialState = {
    name:'Silvia',
    husband:'Kai',
    child:'Yannick'
}
export const changeName = (name) => ({
    type:CHANGE_NAME,
    name:name
});

export const nameReducer = (state = initialState,action) => {

    if(action.type === CHANGE_NAME){
        return {
            ...state,
            name:action.name
        }
    }
}