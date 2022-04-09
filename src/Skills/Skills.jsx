import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>


            <div className={s.container}>
                <h2 className={s.title}>Skills</h2>

            <div className={s.skills}>
                <Skill title={'Lorem ipsum '} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                <Skill title={'Lorem ipsum '} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                <Skill title={'Lorem ipsum '} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
            </div>
        </div>
        </div>
    );
};

export default Skills;