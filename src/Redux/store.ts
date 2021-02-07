import rootReducer from "./reducer";
import {createStore, applyMiddleware, MiddlewareAPI, Dispatch, Middleware} from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'


const bindMiddleware = (middleware:Middleware<Dispatch,any,any>[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}


const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
    next: Dispatch
) => action => {
    const returnValue = next(action)
    console.log('state after dispatch', getState())
    return returnValue
}

const initStore = () => {
    return createStore(rootReducer, bindMiddleware([loggerMiddleware,thunkMiddleware]))
}

export const wrapper = createWrapper(initStore,{
    debug:true
})
