import React from 'react';
import s from './Main.module.scss'


const Main = () => {
    return (

        <div className={s.mainBlock}>

            <div className={s.container}>

               <div className={s.intro}>
                   <span>Hi there</span>
                    <h1 className={s.head}>
                       <div className={s.iAm}>I am</div><div className={s.name}> Nikolay Prasolov</div>
                    </h1>
                    <p className={s.text}>
                        Front-end developer
                    </p>
            </div>

                <div className={s.photo}>
                    <div className={s.image}/></div>

            </div>

        </div>
    );
};

export default Main;