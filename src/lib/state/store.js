

import rootReducer from "./reducer";

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
};


const initStore = () => {
    return createStore(rootReducer, bindMiddleware([loggerMiddleware,thunkMiddleware]))
}

export const wrapper = createWrapper(initStore,{
    debug:true
})
