
import '../styles/global/main.scss';

import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "../lib/state/reducer";
import thunk from "redux-thunk";

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





function Application({ Component, pageProps }) {
    return (

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>

    )
}

export default Application