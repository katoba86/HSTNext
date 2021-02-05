import React from "react";
import {setOrigin} from "../lib/state/actions";
import {connect} from "react-redux";

const Test1 = ({onSetOrigin}) => {
    return (
        <div>

            <button onClick={() => onSetOrigin('Dortmund')}>SET ORIGIN</button>

        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        onSetOrigin: (toWhere) => dispatch(setOrigin(toWhere))
    }
};
export default  connect(null,mapDispatchToProps)(Test1);