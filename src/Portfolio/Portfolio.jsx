import React from 'react';
import s from './Portfolio.module.css'
import Work from "./Work/work";



const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.work}>
                    <Work title={'Lorem ipsum.'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quam.'}/>
                    <Work title={'Lorem ipsum.'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quam.'}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;