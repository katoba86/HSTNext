import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "@Redux/reducer";
import { setName, setNameAsync } from "@Redux/actions/user";
import { NextPageContext } from "next";
import { wrapper } from "@Redux/store";
import Layout from "@Components/Layout";
import { UserState } from "../src/type";

const HomePage = () => {
    const user = useSelector(
        (state: ApplicationState): UserState => state.user
    );
    const dispatch = useDispatch();

    const clickMe = () => {
        dispatch(setName("Sync"));
    };

    return (
        <Layout>
            <p>huhu from page</p>
            <h1>
                {user.name}
                dfdfd
            </h1>
            <button type="button" onClick={clickMe}>
                Test
            </button>
        </Layout>
    );
};
export interface ReduxNextPageContext extends NextPageContext {
    store: ApplicationState;
}

export const getStaticProps = wrapper.getStaticProps(
    ({ store }) => async () => {
        await store.dispatch(setNameAsync());
        return {
            props: {},
        };
    }
);
/*
export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        await store.dispatch(setNameAsync());
        
    }
);
 */

export default HomePage;
