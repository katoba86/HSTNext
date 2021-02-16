import style from './Box.module.scss';
import {BoxProps} from "@Components/Box/Box";


const Title = ({children}:BoxProps) => {
    return (
        <h3>{children}</h3>
    )
}

const Content = ({children}:BoxProps) => {



        return (

                <div>
                    {children}
                </div>

        )

}

const Box = ({ children }: BoxProps) => {
    const classes:string[] = [style.blankslate,style[`blankslate-narrow`]];
        return (
            <div className={classes.join(' ')}>
                    {children}
            </div>
        )
}
Box.Title = Title;
Box.Content = Content;
export default Box;
