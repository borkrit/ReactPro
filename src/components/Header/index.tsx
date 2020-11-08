// import className from 'classnames';
import React from 'react';
import style from './header.module.scss';
//  import logo from './img/Logo.png';
import s from '../../App.module.scss'

const Header = () => {

    return (
        <div className={style.header} >
            <div className={s.container} >
                <img src='{logo}' alt="logotop" />
                <nav className={style.topMenu}>
                    <a href="#">home</a>
                    <a href="#">pokedex</a>
                    <a href="#">legendaries</a>
                    <a href="#">documentation</a>
                </nav>
            </div>
        </div>

    )
}

export default Header;