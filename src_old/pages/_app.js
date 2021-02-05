
import '../styles/global/main.scss';
import App from "next/app";

import { wrapper } from '../lib/state/store'




class MyApp extends App{

    render(){

        const { Component, pageProps } = this.props;

        return (

                <Component {...pageProps} />

        )
    }
}
export default wrapper.withRedux(MyApp);