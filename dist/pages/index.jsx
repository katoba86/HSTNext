"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("@Components/Layout"));
const Box_1 = __importDefault(require("@Components/Box"));
const react_redux_1 = require("react-redux");
const Storyblok_service_1 = require("@Api/Storyblok.service");
const BoxBig_1 = __importDefault(require("@Components/BoxBig"));
const Grid_1 = __importDefault(require("@Components/Grid"));
const HomePage = ({ data }) => {
    const u = react_redux_1.useSelector((state) => state.user);
    return <Layout_1.default>

        <Grid_1.default>


            <Grid_1.default.Top>
                <div className="d-flex flex-column flex-md-row">
                    {data.above.map((block, index) => (<Box_1.default key={'box_' + index} id={'box_' + index}>
                            <h3 className="mb-1">{block.Headline}</h3>
                            <p>{block.Text}</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box_1.default>))}
                </div>
            </Grid_1.default.Top>
            <Grid_1.default.Left>
                {data.body.map((block, index) => {
        if (block.component === 'Box2') {
            return (<BoxBig_1.default key={'BoxBig' + index}>
                                    <BoxBig_1.default.Image imageSrc={block.Image.filename}/>
                                    <BoxBig_1.default.Content>
                                        <BoxBig_1.default.Title>Huhu</BoxBig_1.default.Title>
                                        <span dangerouslySetInnerHTML={{ __html: block.renderedText }}/>
                                    </BoxBig_1.default.Content>
                                </BoxBig_1.default>);
        }
    })}

            </Grid_1.default.Left>
            <Grid_1.default.Right>
                Right
            </Grid_1.default.Right>

        </Grid_1.default>



    </Layout_1.default>;
};
exports.getStaticProps = async (context) => {
    const data = await Storyblok_service_1.StoryblokService.getInstance().getPage("home");
    return {
        props: {
            data: data
        }
    };
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
