import React from 'react';
import s from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../components/title/Title";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>


            <div className={s.container} >
                <Title title={'skills'} />
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