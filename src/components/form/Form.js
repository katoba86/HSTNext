import {ArrowSwitchIcon, ClockIcon, HomeIcon, MilestoneIcon} from "@primer/octicons-react";
import style from './Form.module.scss';

import React from "react";
import {useState,useContext} from "react";
import Test2 from "../Test2";
import ClientOnlyPortal from "../ClientOnlyPortal";
import {connect} from "react-redux";
import {setModal} from "../../lib/state/actions";

const Form = ({modal,setModal}) => {




    const clickMe = () => {
        console.log("Triggered");
        setModal(true);
    }

    const Loader = () => {
        return (
            <div id="cop">
                modal holder
                { modal && (
         <ClientOnlyPortal selector="#__next">
             <Test2/>
         </ClientOnlyPortal>
                )}
            </div>
        );
    }

    return (
        <div id="Form" className={style.mainForm}>
            <h1 className="d-md-none">Haltestellen</h1>
            <form className={style.form__content}>

                <Loader/>

                <div className={[style.Box,'Box position-relative'].join(' ')}>
                    <div onClick={clickMe} className="Box-row d-flex flex-items-center">
                        <HomeIcon size={24} />
                        <div className="flex-auto">Von</div>
                    </div>
                    <button className={style.toggle}><ArrowSwitchIcon size={24}/></button>
                    <div className="Box-row d-flex flex-items-center">
                        <MilestoneIcon size={24} />
                        <div className="flex-auto">Nach</div>
                    </div>

                    <div className="Box-row d-flex flex-items-center">
                        <ClockIcon size={24} />
                        <div className="flex-auto">Wann</div>
                    </div>
                    <button className="btn btn-default mb-sm-4 bg-warning mt-sm-2 mt-lg-0 mb-lg-0 float-right">
                        Suchen
                    </button>
                </div>


            </form>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        name:state.user.user,
        origin:state.city.origin,
        modal:state.user.modal
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setModal: (toggle) =>dispatch(setModal(toggle))
        //onHaveFun: (who) => dispatch(haveFun(who)),
        //onSetOrigin: (toWhere) => dispatch(setOrigin(toWhere))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Form);