import React from "react";
import styles from '../styles/modules/appheader.module.scss'
const Modalinput = (props) => {


    const getValue = () => {
        return (typeof props.value === 'string')?props.value:props.value.name;
    };

    const getClasses = (c = []) => {
        c.push(!(props.valid)?styles.isInvalid:styles.isValid);
        if('disabled' in props && props.disabled){c.push(styles.disabled);}
        return c.join(" ");
    };

    const getIcon = (icons = [styles.icon,styles.iconBig]) => {

        icons.push(styles[props.icon]);

        return icons.join(" ");
    }

    const test2 = () => {
        console.log("test2");
    }


    return (
        <div onClick={props.onClick} className={getClasses([styles.inputWrapper])}>
            <label>{ props.label }</label>
            <div className={styles.input}>{ getValue() }</div>
            <div className={getIcon()}/>
            <div className={styles.error}>{ props.error }</div>
        </div>
    );

}
export default Modalinput;