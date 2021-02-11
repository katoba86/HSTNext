import React from "react";
import App from "next/app";
import "../../styles/global/main.scss";
import {Provider} from "react-redux";
import {initStore} from "@Redux/store";

class WebApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Provider store={initStore}><Component {...pageProps} /></Provider>
        )
    }
}

export default WebApp;
