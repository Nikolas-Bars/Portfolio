import React from 'react';
import s from './Footer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import telegramImage from '../assets/image/telegram.png'
import githubImage from '../assets/image/github.png'
import linkedinImage from '../assets/image/linkedin.png'


const Footer = () => {
    return (
        <div className={s.footer}>
            <h2><span>Nikolay Prasolov</span></h2>
            <div className={s.container}>

                <div><img alt={''} src={telegramImage}/></div>
                <div><img alt={''} src={githubImage}/></div>
                <div><img alt={''} src={linkedinImage}/></div>

            </div>
            <h6>©All Rights Reserved.</h6>
        </div>
    );
};

export default Footer;