"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Layout_module_scss_1 = __importDefault(require("./Layout.module.scss"));
const dynamic_1 = __importDefault(require("next/dynamic"));
const DynamicForm = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require('@Components/Form'))), { ssr: true });
const DynamicIntro = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require('@Components/Intro'))));
const Layout = ({ children }) => {
    return (<div className={Layout_module_scss_1.default.appWrapper}>
            <header className={Layout_module_scss_1.default.header}>
                <DynamicIntro />
                <DynamicForm />
            </header>
            <main>{children}</main>
        </div>);
};
exports.default = Layout;
