import style from './BoxBig.module.scss';
import {BoxBigImage, BoxBigProps} from "@Components/BoxBig/BoxBig";
import Image from 'next/image';

const Title = ({children}:BoxBigProps) => {
    return (
        <h3>{children}</h3>
    )
}
const Content = ({children}:BoxBigProps) => {
    return (
        <div className={style.content}>{children}</div>
    )
}

const BoxImage = ({imageSrc}:BoxBigImage) => {
    return (
        <div className={style.image}>
            <Image src={imageSrc}  layout="responsive"
                   width={700}
                   height={475} alt='test2' />
        </div>
    )
}


const BoxBig = ({ children }: BoxBigProps) => {

    const classes:string[] = [
        'd-flex',
        style.boxbig
    ];

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}


BoxBig.Image = BoxImage;
BoxBig.Title = Title;
BoxBig.Content = Content;
export default BoxBig;
