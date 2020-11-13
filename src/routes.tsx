import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

interface IHeaderMenu{
    title: string
    link: string
    component: ()=>JSX.Element
}

export const HEADER_MENU: IHeaderMenu[]  =[
    { 
        title:'Home',
        link:'/',
        component: ()=> <HomePage/>
    },
    {
        title:'pokedex',
        link:'/pokedex',
        component: ()=> <Pokedex/>
    },
    {
        title:'legendaries',
        link:'/legendaries',
        component: ()=> <HomePage/>
    },
    {
        title:'documentation',
        link:'/documentation',
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
