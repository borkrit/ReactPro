import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

interface IHeaderMenu{
    title: string
    link: LinkEnum
    component: ()=>JSX.Element
}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES='/legendaries',
    DOCUMENTATION='/documentation'

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

interface IAcc {
    [n:string]: ()=>JSX.Element
}

const routes = HEADER_MENU.reduce((acc:IAcc, item: IHeaderMenu)=>{
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;
