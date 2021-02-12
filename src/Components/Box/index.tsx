import style from './Box.module.scss';
import {BoxProps} from "@Components/Box/Box";
const Box = ({ children,narrow,boxed,id }: BoxProps) => {

    if(null === id || undefined === id){
        id="Box";
    }
    const classes:string[] = [style.blankslate];
    if(narrow){
        classes.push(style[`blankslate-narrow`]);
    }
    if(boxed){
        return (
            <div className="Box">
                <div className={classes.join(' ')}>
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div id={id} className={classes.join(' ')}>
            {children}
        </div>
    )
}
export default Box;
