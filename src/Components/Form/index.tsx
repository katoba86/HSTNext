import {
    ArrowSwitchIcon,
    ClockIcon,
    HomeIcon,
    MilestoneIcon,
} from "@primer/octicons-react";
import React from "react";
import style from "./Form.module.scss";

const Form = () => {
    return (
        <div id="Form" className={style.mainForm}>
            <h1 className="d-md-none">Haltestellen</h1>
            <form className={style.form__content}>
                <div className={[style.Box, "Box position-relative"].join(" ")}>
                    <div className="Box-row d-flex flex-items-center">
                        <HomeIcon size={24} />
                        <div className="flex-auto">Von</div>
                    </div>
                    <button type="button" className={style.toggle}>
                        <ArrowSwitchIcon size={24} />
                    </button>
                    <div className="Box-row d-flex flex-items-center">
                        <MilestoneIcon size={24} />
                        <div className="flex-auto">Nach</div>
                    </div>

                    <div className="Box-row d-flex flex-items-center">
                        <ClockIcon size={24} />
                        <div className="flex-auto">Wann</div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-default mb-sm-4 bg-warning mt-2 mt-sm-5 mt-lg-0 mb-lg-0 float-left"
                    >
                        Suchen
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Form;
