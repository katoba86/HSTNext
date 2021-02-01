import React from "react";
import {connect} from "react-redux";
import {setModal} from "../lib/state/actions/index";

const Test2 = ({setModal}) => {





    const hide = () => {
        setModal(false);
    }

    const testBackDrop = (e) => {
        if(e.target.hasAttribute('data-hide')){
            setModal(false);
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
        setModal: (toggle) =>dispatch(setModal(toggle))
        //onHaveFun: (who) => dispatch(haveFun(who)),
        //onSetOrigin: (toWhere) => dispatch(setOrigin(toWhere))
    }
};

export default connect(null,mapDispatchToProps)(Test2);