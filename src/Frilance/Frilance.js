import React from 'react';
import s from './Frilance.module.css'

const Frilance = () => {
    return (
        <div className={s.frilance}>
            <div className={s.container}>
                <div className={s.title}><h2>Рассматриваю варианты удаленной работы</h2> </div>
                <span className={s.spanButton}>Нанять меня</span>
            </div>
        </div>
    );
};

export default Frilance;