import React from "react";
import style from './FormSelect.module.scss'

import HomeIcon from './home.svg';


const FormSelect = () => {


    return (

        <div className={["position-relative","flex-1","d-flex",style.outer].join(" ")}>
            <div className={style.icon}>
                <div className={style.iconInner}>
                    <HomeIcon />
                </div>
            </div>
            <input type="text" placeholder="Search" className={style.input} />

            <div className={style.autocomplete}>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                </ul>
            </div>

        </div>
    );

}
export default FormSelect;
