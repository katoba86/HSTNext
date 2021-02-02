import {ArrowSwitchIcon, ClockIcon, HomeIcon, MilestoneIcon} from "@primer/octicons-react";
import style from './Form.module.scss';

import React from "react";
import Test2 from "../Test2";
import ClientOnlyPortal from "../ClientOnlyPortal";
import {useStore} from "../../lib/context/store";
import {setModal} from "../../lib/context/reducer";

const Form = () => {


    const [state,dispatch] = useStore();

    const clickMe = () => {
        dispatch(setModal(true));
    }

    const Loader = () => {
        return (
            <div id="cop">
                { state.modal && (
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
                        <div className="flex-auto">{ (state.origin===null)?"Von":state.origin.name }</div>
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



export default Form;