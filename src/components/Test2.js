import React from "react";
import {useStore} from "../lib/context/store";
import {setModal} from "../lib/context/reducer";

const Test2 = () => {


    const [,dispatch] = useStore();


    const hide = () => {
        dispatch(setModal(false));
    }

    const testBackDrop = (e) => {
        if(e.target.hasAttribute('data-hide')){
            hide();
        }
    }

    return (
        <div data-hide="true" className="page" onClick={testBackDrop}>
            <div className="page__content">
                <div className="Box">
                    <button onClick={hide}>test</button>
                </div>
            </div>

        </div>
    );
}


export default Test2;