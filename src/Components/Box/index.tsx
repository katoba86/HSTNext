import style from './Box.module.scss';
import {BoxProps} from "@Components/Box/Box";


const Title = ({children}:BoxProps) => {
    return (
        <h3>{children}</h3>
    )
}

const Content = ({children,narrow,boxed}:BoxProps) => {
    const classes:string[] = [style.blankslate];
    if(narrow){
        classes.push(style[`blankslate-narrow`]);
    }
    if(boxed){
        return (

                <div className={classes.join(' ')}>
                    {children}
                </div>

        )
    }

    return (
        <>
            {children}
        </>
    )
}

const Box = ({ children }: BoxProps) => {
        return (
            <div className="Box">
                    {children}
            </div>
        )
}
Box.Title = Title;
Box.Content = Content;
export default Box;
