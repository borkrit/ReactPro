import React from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header/>
            <Layout 
            
            >
                <div 
                  
                >
                    <h1>
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </h1>
                    <p>
                    You can know the type of Pokemon, its strengths, disadvantages and abilities 
                    </p>

                    <Button onClick={()=>console.log('work')} >
                        See pokemons
                    </Button>
                </div>
                <div 
                    
                >
                    <Parallax />

                </div>
            </Layout>
            
            
        </div>
        
    );
};

export default HomePage;