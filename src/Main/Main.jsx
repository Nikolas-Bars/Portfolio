import React from 'react';
import s from './Main.module.scss'


const Main = () => {
    return (

        <div className={s.mainBlock}>

            <div className={s.container}>

               <div> <span className={s.text1}>Hi there</span>
                    <h1 className={s.title}>
                        <div><span>I am</span></div>
                        <div><span className={s.spanText}> Nikolay Prasolov</span></div></h1>
                    <p className={s.text}>
                        Front-end developer
                    </p>
            </div>

                <div className={s.photo}></div>

            </div>

        </div>
    );
};

export default Main;