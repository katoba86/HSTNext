import React from "react";
import App from "next/app";
import { wrapper } from "@Redux/store";
import "../../styles/global/main.scss";

class WebApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return <Component {...pageProps} />;
    }
}

export default wrapper.withRedux(WebApp);
