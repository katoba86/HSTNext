import style from './NewForm.module.scss';

const NewForm  = () => {
    return (

        <div className={style.newform}>

            <div className={style.leftForm}>

            <div className={style.forminput}>
                <input placeholder="Von wo?"/>
            </div>
            <div className={style.forminput}>
                <input placeholder="Wohin?" />
            </div>
            <div className={style.forminput}>
                <input placeholder="Wann?" />
            </div>


            <div className={style.finish}>
                <h2>Stadt zu Stadt</h2>
                <button className={style.finishbtn}>Jetzt suchen</button>
            </div>

            </div>
            <div className={style.togglearea}>
                <a href="#">
                    <svg width="40" height="40"><g stroke="#000" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.75 33.688v2.5a2.5 2.5 0 005 0v-2.5M31.25 33.688v2.5a2.5 2.5 0 01-5 0v-2.5M33.75 31.188a2.5 2.5 0 01-2.5 2.5H8.75a2.5 2.5 0 01-2.5-2.5v-22.5a7.5 7.5 0 017.5-7.5h12.5a7.5 7.5 0 017.5 7.5v22.5zM16.25 6.188h7.5" stroke-width="2.5000050000000003"/><path d="M6.25 11.188h27.5v12.5H6.25v-12.5zM11.25 28.688h5M23.75 28.688h5M6.25 13.688h-2.5a2.5 2.5 0 00-2.5 2.5v7.5M33.75 13.688h2.5a2.5 2.5 0 012.5 2.5v7.5" stroke-width="2.5000050000000003"/></g></svg>
                    <h3>Bus</h3>
                    <strong>Fahrplan</strong>
                </a>

            </div>




        </div>
    )
}
export default NewForm;
