import style from './Box.module.scss';
import {BoxProps} from "@Components/Box/Box";
const Box = ({ children }: BoxProps) => {
    return (
        <div className={[style.blankslate,style.blankslateNarrow].join(' ')}>
            {children}
        </div>
    )
}
export default Box;
