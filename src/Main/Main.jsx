import React from 'react';
import s from './Main.module.css'


const Main = () => {
    return (

        <div className={s.mainBlock}>

            <div className={s.container}>

                <div className={s.text}><span>Lorem ipsum.</span>
                    <h1> dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className={s.photo}></div>

            </div>

        </div>
    );
};

export default Main;