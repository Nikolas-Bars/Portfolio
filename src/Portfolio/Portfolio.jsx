import React from 'react';
import s from './Portfolio.module.scss'
import Work from "./Work/work";
import Title from "../components/title/Title"
import logo from './../assets/image/logo.png'



const Portfolio = () => {
    const counter = {
       backgroundImage: `url(${logo})`,
    }

    const tdl = {
        backgroundImage: `url(${logo})`,

    }

    return (
        <div className={s.portfolioBlock}>
            <div className={s.container}>
                <Title title={"Portfolio"}/>
                <div className={s.work}>
                    <Work style={counter} title={'Lorem ipshum.'} description={'Lg elit. Possimus, quam.'}/>
                    <Work style={tdl} title={'Lorem ipsum.'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quam.'}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;