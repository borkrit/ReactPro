// import className from 'classnames';
import React from 'react';
import style from './header.module.scss';
import {ReactComponent as PokemonLogo} from './img/Logo.svg';
import s from '../../App.module.scss'

interface IMenu{
    id:number
    value:string
    link:string
}
const MENU: IMenu[] =[
    {
        id:1,
        value:'Home',
        link:'#',
    },
    {
        id:2,
        value:'pokedex',
        link:'/pokedex',
    },
    {
        id:3,
        value:'legendaries',
        link:'#',
    },
    {
        id:4,
        value:'documentation',
        link:'#',
    },
]

const Header = () => {

    return (
        <div className={style.root} >
            <div className={style.wrap} >
                <div className={style.pokemonLogo}>
                    <PokemonLogo/>
                </div>
                <div className={style.menuWrap}>
                    {
                        MENU.map(({value,link,id}) => (
                            <a key={id} href={link} className={style.menuLink}>{value}</a>

                        ))
                    }
                    
                    
                </div>
               
                
                    
                
            </div>
        </div>

    )
}

export default Header;