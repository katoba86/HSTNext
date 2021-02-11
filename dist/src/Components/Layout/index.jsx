"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Intro_1 = __importDefault(require("@Components/Intro"));
const Form_1 = __importDefault(require("@Components/Form"));
const Layout_module_scss_1 = __importDefault(require("./Layout.module.scss"));
const Layout = ({ children }) => {
    return (<div className={Layout_module_scss_1.default.appWrapper}>
            <header className={Layout_module_scss_1.default.header}>
                <Intro_1.default />
                <Form_1.default />
            </header>
            <main>{children}</main>
        </div>);
};
exports.default = Layout;
