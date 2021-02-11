"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("@Components/Layout"));
const Box_1 = __importDefault(require("@Components/Box"));
const react_redux_1 = require("react-redux");
const HomePage = () => {
    const u = react_redux_1.useSelector((state) => state.user);
    return (<Layout_1.default>

            <div className="grid">
                <div className="grid__item top">
                    <div className="d-flex flex-column flex-md-row">
                        <Box_1.default>
                            <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
                            <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box_1.default>
                        <Box_1.default>
                            <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
                            <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box_1.default>
                        <Box_1.default>
                            <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
                            <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box_1.default>
                    </div>
                </div>
                    <div className="grid__item  left">
                        left
                    </div>
                <div className="grid__item right">
                    right
                </div>
            </div>



        </Layout_1.default>);
};
/*
export const getStaticProps = wrapper.getStaticProps(
    ({ store }) => async () => {
        await store.dispatch(setNameAsync());
        return {
            props: {},
        };
    }
);

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        await store.dispatch(setNameAsync());
        
    }
);
 */
exports.default = react_redux_1.connect(null, null)(HomePage);
