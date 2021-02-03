import React from "react";
import style from './Box1.module.scss';

const Box1 = (props) => {

    return (
        <div className={style.blankslate}>
            {props.children}
        </div>
    );
}
export default Box1;