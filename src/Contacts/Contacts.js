import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>

            <div className={s.container}>

                <h2>Контакты</h2>

                <form className={s.form}>

                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea />

                </form>

            </div>

        </div>
    );
};

export default Contacts;