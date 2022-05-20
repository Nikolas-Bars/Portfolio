import React from 'react';
import s from './Main.module.scss'


const Main = () => {
    return (

        <div className={s.mainBlock}>

            <div className={s.container}>

               <div> <span className={s.text1}>Lorem ipsum.</span>
                    <h1 className={s.title}> Nikolay Prasolov</h1>
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