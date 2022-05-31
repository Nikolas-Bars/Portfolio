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
                    <input type={"text"} className={s.formArea} placeholder={'Name'}/>
                    <input type={"text"} className={s.formArea} placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'} className={s.messageArea}/>
                    <button type={"submit"}>SEND MESSAGE</button>
                </form>

            </div>

        </div>
    );
};

export default Contacts;