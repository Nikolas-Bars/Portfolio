import React from 'react';
import s from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={s.skill}>

            <div className={s.icon}>
           <div className={s.image}><img src={props.image} alt={'image'}/></div>
        </div>

            <h3 className={s.title}>{props.title}</h3>

            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Skill;