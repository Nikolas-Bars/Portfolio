import React from 'react';
import s from './work.module.css'

const Work = (props) => {
    return (
        <div className={s.workBlock}>
            <div className={s.imageContainer}>


                <a href={"#"} className={s.spanButton}>
                    Смотреть
                </a>


            </div>

            <div className={s.title}>{props.title}</div>
            <div className={s.descriprion}>{props.description}</div>
        </div>
    );
};

export default Work;