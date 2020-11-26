import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon, { IPokemonProps } from './pages/Pokemon';

interface IHeaderMenu{
    title: string
    link: LinkEnum
    component: (props: PropsWithChildren<any>)=>JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES='/legendaries',
    DOCUMENTATION='/documentation',
    POKEMON='/pokedex/:id'

}

export const HEADER_MENU: IHeaderMenu[]  =[
    { 
        title:'Home',
        link:LinkEnum.HOME,
        component: ()=> <HomePage/>
    },
    {
        title:'pokedex',
        link:LinkEnum.POKEDEX,
        component: ()=> <Pokedex/>
    },
    {
        title:'legendaries',
        link:LinkEnum.LEGENDARIES,
        component: ()=> <HomePage/>
    },
    {
        title:'documentation',
        link:LinkEnum.DOCUMENTATION,
        component: ()=> <HomePage/>
    },
];

const SECOND_ROUTES: IHeaderMenu[] =[{
    title: 'POKEMON',
    link: LinkEnum.POKEMON,
    component:({id}:IPokemonProps)=> <Pokemon id={id}/>
}]

interface IAcc {
    [n:string]: (props: PropsWithChildren<any>)=>JSX.Element
}

const routes = [...HEADER_MENU, ...SECOND_ROUTES].reduce((acc:IAcc, item: IHeaderMenu)=>{
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;
