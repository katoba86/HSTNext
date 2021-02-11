import style from './CityModal.module.scss';
import {ChevronLeftIcon, XIcon} from "@primer/octicons-react";
import {setModal} from "@Redux/actions";
import {useDispatch} from "react-redux";
import React from "react";
const CityModal = () => {
    const dispatch = useDispatch();

    const hide = () => {
        dispatch(setModal(false));
    }


    const testBackDrop = (e:React.MouseEvent) => {
        const t = e.target as Element;
        console.log(t);
        if(t.hasAttribute('data-hide')) {
            hide();
        }
    }

    return (
        <div data-hide="true"  className={style.page} onClick={(e:React.MouseEvent) => testBackDrop(e)}>
            <div className={style.page__content}>
                <div className={style.Box}>

                    <header className="d-md-none">
                        <div className={style.back}><ChevronLeftIcon size={24} /></div>
                        <div className={style.title}>Title</div>
                        <div className={style.close}><XIcon size={24} /></div>
                    </header>
                    <section className={style.section}>
                        <div className={["d-none","d-lg-flex","d-md-flex",style.left].join(' ')}>left</div>
                        <div className={style.content}>
                            <h1 className="d-none d-lg-block">Title</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi fugiat quae, quia quidem saepe vel! Architecto dolores inventore iste magni officia perspiciatis quae totam! Accusamus architecto atque corporis delectus exercitationem explicabo minus nemo nisi, perspiciatis quaerat quo sunt voluptate, voluptatem. Adipisci culpa cupiditate ea error illo impedit maiores molestias nemo, nobis nostrum placeat praesentium quia quo saepe sapiente, ut vel voluptas voluptatibus. Exercitationem id molestias natus nemo omnis. Accusantium adipisci amet consequatur, delectus deserunt dolor enim eum excepturi fuga fugit impedit incidunt ipsam iusto labore laborum modi mollitia nemo nihil nostrum obcaecati officia possimus praesentium repudiandae temporibus tenetur velit vitae? A dolores eum excepturi hic ipsam quam recusandae reprehenderit, sapiente? Adipisci aliquam, autem culpa debitis doloribus, harum id magnam minima necessitatibus neque nobis possimus, recusandae sed tenetur ut! Autem beatae consequatur maiores odio repellat? Ad ipsum iusto minima nulla praesentium, reiciendis sequi! Autem hic non nostrum provident quisquam?</p>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    )

};
export default CityModal;
