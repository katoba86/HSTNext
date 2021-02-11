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
const ClientPortal_1 = __importDefault(require("@Components/ClientPortal"));
const octicons_react_1 = require("@primer/octicons-react");
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const actions_1 = require("@Redux/actions");
const Form_module_scss_1 = __importDefault(require("./Form.module.scss"));
const dynamic_1 = __importDefault(require("next/dynamic"));
const Form = ({ noMargin }) => {
    const { modal } = react_redux_1.useSelector((state) => state.user);
    const DynamicComponent5 = dynamic_1.default(() => Promise.resolve().then(() => __importStar(require('@Components/CityModal'))), { ssr: false });
    const dispatch = react_redux_1.useDispatch();
    const renderModal = () => {
        if (modal) {
            return <DynamicComponent5 />;
        }
        return (<div>test</div>);
    };
    const Loader = () => {
        return (<div id="cop">
                <ClientPortal_1.default selector="#__next">
                    {modal && renderModal()}
                </ClientPortal_1.default>
            </div>);
    };
    const openModal = (e) => {
        e.preventDefault();
        dispatch(actions_1.setModal(true));
    };
    const classes = [Form_module_scss_1.default.mainForm];
    if (noMargin) {
        classes.push(Form_module_scss_1.default.no_margin);
    }
    return (<div id="Form" className={classes.join(' ')}>
            <Loader />

            <h1 className="d-md-none">Haltestellen</h1>
            <form className={Form_module_scss_1.default.form__content}>
                <div onClick={(e) => openModal(e)} className={[Form_module_scss_1.default.Box, "Box position-relative"].join(" ")}>
                    <div className="Box-row d-flex flex-items-center">
                        <octicons_react_1.HomeIcon size={24}/>
                        <div className="flex-auto">Von</div>
                    </div>
                    <button type="button" className={Form_module_scss_1.default.toggle}>
                        <octicons_react_1.ArrowSwitchIcon size={24}/>
                    </button>
                    <div className="Box-row d-flex flex-items-center">
                        <octicons_react_1.MilestoneIcon size={24}/>
                        <div className="flex-auto">Nach</div>
                    </div>

                    <div className="Box-row d-flex flex-items-center">
                        <octicons_react_1.ClockIcon size={24}/>
                        <div className="flex-auto">Wann</div>
                    </div>
                    <button type="button" className="btn btn-default mb-sm-4 bg-warning mt-2 mt-sm-5 mt-md-0 mb-md-0 float-left">
                        Suchen
                    </button>
                </div>
            </form>
        </div>);
};
exports.default = Form;
