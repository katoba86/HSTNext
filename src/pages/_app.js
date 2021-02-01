
import '../styles/global/main.scss';
import App from "next/app";
import {StoreProvider} from "../lib/context/store";
import {initialState, nameReducer} from "../lib/context/reducer";





class MyApp extends App{

    render(){

        const { Component, pageProps } = this.props;

        return (
            <StoreProvider initialState={initialState} reducer={nameReducer}>
                <Component {...pageProps} />
            </StoreProvider>
        )
    }
}
export default MyApp;