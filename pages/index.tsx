import React from "react";
import { ApplicationState } from "@Redux/reducer";
import { NextPageContext } from "next";
import Layout from "@Components/Layout";
import Box from "@Components/Box";


const HomePage = () => {


    return (
        <Layout>


            <div className="grid">
                <div className="grid__item top">
                    <div className="d-flex flex-column flex-md-row">
                        <Box>
                            <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
                            <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box>
                        <Box>
                            <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
                            <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box>
                        <Box>
                            <h3 className="mb-1">You don’t seem to have any pull requests.</h3>
                            <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
                            <button className="btn btn-primary my-3" type="button">New pull request</button>
                        </Box>
                    </div>
                </div>
                    <div className="grid__item  left">
                        left
                    </div>
                <div className="grid__item right">
                    right
                </div>
            </div>



        </Layout>
    );
};
export interface ReduxNextPageContext extends NextPageContext {
    store: ApplicationState;
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

export default HomePage;
