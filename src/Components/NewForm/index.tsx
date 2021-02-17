import style from './NewForm.module.scss';

const NewForm  = () => {
    return (
        <div className={style.newform}>

            <div className={style.forminput}>
                <input placeholder="Von wo?"/>
            </div>
            <div className={style.forminput}>
                <input placeholder="Wohin?" />
            </div>
            <div className={style.forminput}>
                <input placeholder="Wann?" />
            </div>


        </div>
    )
}
export default NewForm;
