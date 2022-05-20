import React from 'react';
import s from './work.module.scss'

const Work = (props) => {
    return (
        <div className={s.workBlock}>
            <div className={s.imageContainer} style={props.style}>
                <a className={s.spanButton}>
                    View
                </a>
            </div>
        <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <div className={s.descriprion}>{props.description}</div>
        </div>
        </div>
    );
};

export default Work;