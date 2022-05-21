import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h2><span>Nikolay Prasolov</span></h2>
            <div className={s.container}>

                <div className={s.footerElement}></div>
                <div className={s.footerElement}></div>
                <div className={s.footerElement}></div>
                <div className={s.footerElement}></div>
            </div>
            <h6>©Все права защищены</h6>
        </div>
    );
};

export default Footer;