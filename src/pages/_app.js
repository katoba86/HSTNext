
import '../styles/global/main.scss';
import App from "next/app";
import AppContextProvider from "../lib/context/AppContext";




class MyApp extends App{

    render(){

        const { Component, pageProps } = this.props;

        return (
            <AppContextProvider>
                <Component {...pageProps} />
            </AppContextProvider>
        )
    }
}
export default MyApp;
/*
function Application({ Component, pageProps }) {
    return (


                <Component {...pageProps} />


    )
}

export default Application*/