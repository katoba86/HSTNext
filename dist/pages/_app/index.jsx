"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const app_1 = __importDefault(require("next/app"));
const store_1 = require("@Redux/store");
require("../../styles/global/main.scss");
class WebApp extends app_1.default {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps}/>;
    }
}
exports.default = store_1.wrapper.withRedux(WebApp);
