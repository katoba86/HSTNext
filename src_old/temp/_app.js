
import '../styles/global/main.scss';
import App from "next/app";


import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from "../lib/state/reducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const logger = store => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE]', action);
            const result = next(action);
            console.log('[MIDDLEWARE] next state',store.getState());
            return result;
        }
    }
};

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));






class MyApp extends App{

    render(){

        const { Component, pageProps } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}
export default MyApp;