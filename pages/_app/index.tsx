import React from 'react'
import App from 'next/app'
import {Provider} from "react-redux";
import { wrapper } from "@Redux/store";



class WebApp extends App {
      render() {
        const { Component, pageProps } = this.props;

        return (
                    <Component {...pageProps} />
        );
    }
}

export default wrapper.withRedux(WebApp);
