import style from './BoxBig.module.scss';
import {BoxBigProps} from "@Components/BoxBig/BoxBig";
const BoxBig = ({ children }: BoxBigProps) => {

    const classes:string[] = [style.blankslate];


    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}
export default BoxBig;
