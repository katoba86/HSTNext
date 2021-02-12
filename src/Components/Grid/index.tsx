import style from './Grid.module.scss';
import React from "react";

interface GridProps{
    children:React.ReactNode
}
const GridLeft = ({children}:GridProps) => (
    <div className={[style.griditem,style.left].join(' ')}>
        {children}
    </div>
)
const GridRight = ({children}:GridProps) => (
    <div className={[style.griditem,style.right].join(' ')}>
        {children}
    </div>
)

const GridTop = ({children}:GridProps) => (
    <div className={[style.griditem,style.top].join(' ')}>
        {children}
    </div>
)

const Grid = ({children}:GridProps) => {
    return (
        <div className={style.grid}>
            {children}
        </div>
    )
}
Grid.Top = GridTop;
Grid.Left = GridLeft;
Grid.Right = GridRight;
export default Grid;
