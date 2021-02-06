
import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {setName, UserState} from "@Redux/userReducer"



const HomePage = () => {


    const name = useSelector<UserState,UserState["name"]>(state => state.name);
    const dispatch = useDispatch();


    const clickMe = () => {
            console.log('Click me');
        dispatch(setName("Silvia"));
    };

    return (
        <>
            <p>huhu from page</p>
            <h1>
                { name }
              dfdfd
            </h1>
            <button type="button" onClick={clickMe}>
                Test
            </button>
        </>
    );
};



export default HomePage;
