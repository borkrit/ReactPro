import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../routes';

import s from './home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            
            <Layout 
            
            >
                <div>
                    <Heading element={'h1'}> 
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </Heading>
                    <p>
                    You can know the type of Pokemon, its strengths, disadvantages and abilities 
                    </p>

                    <Button  onClick={()=>navigate(LinkEnum.POKEDEX)} >
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