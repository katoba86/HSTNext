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

        <div className="grid">
            <div className="grid__item top">



                <div className="d-flex flex-column flex-md-row">
                    {data.above.map((block:StoryBlokBlocks) => (
                        <Box>
                            <h3 className="mb-1">{ block.Headline}</h3>
                            <p>{ block.Text }</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box>
                    ))}
                </div>
            </div>
                <div className="grid__item  left">

                    <BoxBig>
                        <div>Hello</div>
                    </BoxBig>


                </div>
            <div className="grid__item right">
                { JSON.stringify(data.body)}
            </div>
        </div>



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
