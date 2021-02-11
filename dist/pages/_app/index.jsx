"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const app_1 = __importDefault(require("next/app"));
require("../../styles/global/main.scss");
const react_redux_1 = require("react-redux");
const store_1 = require("@Redux/store");
class WebApp extends app_1.default {
    render() {
        const { Component, pageProps } = this.props;
        return (<react_redux_1.Provider store={store_1.initStore}><Component {...pageProps}/></react_redux_1.Provider>);
    }
}
exports.default = WebApp;
