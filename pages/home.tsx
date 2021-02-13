import React from "react";
import { ApplicationState } from "@Redux/reducer";
import {GetStaticProps, NextPageContext} from "next";
import Layout from "@Components/Layout";
import Box from "@Components/Box";
import {connect, useSelector} from "react-redux";
import {UserState} from "../src/type";
import {fetchHome} from "@Api";
import {StoryblokService} from "@Api/Storyblok.service";
import BoxBig from "@Components/BoxBig";
import Grid from "@Components/Grid";


interface StoryBlokBlocks {
    Headline:string;
    Text:string;
}

interface StoryBlokHome{
    above:StoryBlokBlocks[],
    body:StoryBlokBlocks[]
}

interface HomeProps{
    data:StoryBlokHome;
}

const HomePage = ({data}:HomeProps) => {
    const u = useSelector(
        (state: ApplicationState): UserState => state.user
    );

    return <Layout>

        <Grid>


            <Grid.Top>
                <div className="d-flex flex-column flex-md-row">
                    {data.above.map((block:StoryBlokBlocks,index:number) => (
                        <Box key={'box_'+index} id={'box_'+index}>
                            <h3 className="mb-1">{ block.Headline}</h3>
                            <p>{ block.Text }</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box>
                    ))}
                </div>
            </Grid.Top>
            <Grid.Left>
                {data.body.map((block:any,index:number) => {

                        if(block.component==='Box2'){
                            return (
                                <BoxBig>
                                    <BoxBig.Image imageSrc={block.Image.filename}/>
                                    <BoxBig.Content>
                                        <BoxBig.Title>Huhu</BoxBig.Title>
                                        <span dangerouslySetInnerHTML={{__html:block.renderedText}} />
                                    </BoxBig.Content>
                                </BoxBig>
                            );
                        }


                    }
                )}

            </Grid.Left>
            <Grid.Right>
                Right
            </Grid.Right>

        </Grid>



    </Layout>;
};
export interface ReduxNextPageContext extends NextPageContext {
    store: ApplicationState;
}
export const getStaticProps: GetStaticProps = async (context) => {
    const data = await StoryblokService.getInstance().getPage("home");

    return {
        props:{
            data:data
        }
    }
}
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

export default connect(null,null)(HomePage);
