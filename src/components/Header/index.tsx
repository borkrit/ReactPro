// import className from 'classnames';
import React from 'react';
import style from './header.module.scss';
import {ReactComponent as PokemonLogo} from './img/Logo.svg';
import s from '../../App.module.scss'
import { A, usePath } from 'hookrouter';
import { HEADER_MENU } from '../../routes';
import cn from 'classnames'

const Header = () => {
    const path = usePath();
    return (
        <div className={style.root} >
            <div className={style.wrap} >
                <div className={style.pokemonLogo}>
                    <PokemonLogo/>
                </div>
                <div className={style.menuWrap}>
                    {
                        HEADER_MENU.map(({title,link}) => (
                            <A key={title} href={link} className={cn(style.menuLink, {
                                [style.activeLink]: link === path,
                            })}>{title}</A>

                        ))
                    }
                </div>  
            </div>
        </div>

    )
}

export default React.memo(Header);