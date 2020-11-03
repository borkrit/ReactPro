// import className from 'classnames';
import React from 'react';
import style from './footer.module.scss';
// import logo from './img/Logo.png';
import s from '../../App.module.scss';

const Footer = () => {

    return (
        <div className={style.footer} >
            <div className={s.container} >
                <p>Make with love</p>
                <p>Ours Team</p>
            </div>
        </div>

    )
}

export default Footer;