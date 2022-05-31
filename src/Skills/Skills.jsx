import React from 'react';
import s from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../components/title/Title";
import js from '../assets/image/js.png'
import react from '../assets/image/physics.png'
import css from '../assets/image/css.png'

const Skills = () => {



    return (
        <div className={s.skillsBlock}>


            <div className={s.container} >
                <Title title={'skills'} />
                <div className={s.skills}>
                    <Skill image={js}  title={'Java Script '} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                    <Skill image={css} title={'HTML / CSS '} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                    <Skill image={react} title={' React '} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;