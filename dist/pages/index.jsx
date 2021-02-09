"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const user_1 = require("@Redux/actions/user");
const store_1 = require("@Redux/store");
const Layout_1 = __importDefault(require("@Components/Layout"));
const HomePage = () => {
    const user = react_redux_1.useSelector((state) => state.user);
    const dispatch = react_redux_1.useDispatch();
    const clickMe = () => {
        dispatch(user_1.setName("Sync"));
    };
    return (<Layout_1.default>
            <p>huhu from page</p>
            <h1>
                {user.name}
                dfdfd
            </h1>
            <button type="button" onClick={clickMe}>
                Test
            </button>
        </Layout_1.default>);
};
exports.getStaticProps = store_1.wrapper.getStaticProps(({ store }) => async () => {
    await store.dispatch(user_1.setNameAsync());
    return {
        props: {},
    };
});
/*
export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        await store.dispatch(setNameAsync());
        
    }
);
 */
exports.default = HomePage;
