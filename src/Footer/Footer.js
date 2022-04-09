import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h2>Ivan Ivanov</h2>
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