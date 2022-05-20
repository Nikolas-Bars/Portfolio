import React from 'react';
import s from './Nav.module.css'


const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Портфолио</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default Nav;