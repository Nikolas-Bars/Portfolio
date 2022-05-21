import React from 'react';
import s from './Contacts.module.scss'
import button from '../components/title/Button.module.scss'
import Title from "../components/title/Title";

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <Title title={'Contact'} />

                <form className={s.form}>
                    <input type={"text"} placeholder={'Name'}/>
                    <input type={"text"} placeholder={'Password'}/>
                    <textarea placeholder={'Your message'}/>
                    <div style={{marginTop: '15px'}} className={button.btn}>SEND MESSAGE</div>
                </form>

            </div>

        </div>
    );
};

export default Contacts;