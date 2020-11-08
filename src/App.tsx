import React from 'react';
import cn from 'classnames'

// import s from './App.module.scss';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

const App = ()=>{
    return(
        <>
            <Header />
            <div  className={cn('content')}>
            <div className={cn('color')}>
               <h1>Find all your favorite  Pokemon</h1>
                <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                <button type='submit'>See pokemons </button>
            </div>
                <div className={cn('banner')}>
                    <p>banner</p>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default App