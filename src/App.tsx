import React from 'react';
// import cn from 'classnames';
import { BrowserRouter, Route } from 'react-router-dom';
// import s from './App.module.scss';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

const App = ()=>{
    return(
        
            <BrowserRouter>
                <Route path='/' exact component={HomePage}/>
                <Route path='/pokedex' component={Pokedex} />
            </BrowserRouter>
           
    )
}

export default App