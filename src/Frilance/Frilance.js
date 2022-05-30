import React from 'react';
import s from './Frilance.module.scss'
import button from '../components/title/Button.module.scss'
import Title from "../components/title/Title";

const Frilance = () => {
    return (
        <div className={s.frilance}>
            <div className={s.container}>
                <Title title={'I Am Available For Freelancer'}/>
                <div style={{width: '140px'}}>  <span className={`${button.btn} ${s.text}`}>HIRE ME</span></div>
            </div>
        </div>
    );
};

export default Frilance;