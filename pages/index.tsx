
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {AppState} from "@Redux/reducer";
import {setName} from "@Redux/actions/user";
import {UserState} from "../src/type";
import {NextPageContext} from "next";
import {wrapper} from "@Redux/store";


const HomePage = () => {

    const user = useSelector((state: AppState):UserState => state.user);
    const dispatch = useDispatch();

    const clickMe = () => {
        dispatch(setName('Silvia'));
    };

    return (
        <>
            <p>huhu from page</p>
            <h1>
                {user.name}
              dfdfd
            </h1>
            <button type="button" onClick={clickMe}>
                Test
            </button>
        </>
    );
};
export interface ReduxNextPageContext extends NextPageContext {
    store: AppState;
}
export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    console.log("LUVU!!!!");
    store.dispatch(setName("Yannick"));
   console.log(store.getState());
});


export default HomePage;
