import React from "react";
import {connect} from "react-redux";
import {setModal} from "../lib/state/actions";
const Test2 = () => {



    const hide = () => {
        setModal(false);
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

const mapDispatchToProps = dispatch => {
    return {
        setModal: (toggle) => dispatch(setModal(toggle))
    }
};



export default connect(null,mapDispatchToProps)(Test2);