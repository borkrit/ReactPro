import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import s from './pokedex.module.scss'

interface IData {
  pokemons:[]
}

const usePokemons = () =>{
  const [data, setPokemons] = useState<IData>({pokemons:[]});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
   
  useEffect(()=>{

    const getPokemons = async ()=>{

      setIsLoading(true)
      try{
        const respons = await fetch ('http://zar.hosthot.ru/api/v1/pokemons?limit=20');
        const result = await respons.json();
  
        setPokemons(result);
      } catch(e){
        setIsError(true);
      } finally{
        setIsLoading(false)
      }
      
    }

    getPokemons();
  },[]);

  return {
    data,
    isError,
    isLoading

  }

  
    
}

const Pokedex = () => {
  const {  
    data,
    isError,
    isLoading
  } = usePokemons();

  if(isLoading){
    return <div>Loading</div>
  }
  if(isError){
    return <div> Error</div>
  }
  return (
        <div>
            
            <div className={s.pokemonsTable}>
                {
                    data.pokemons.map(({name_clean, img, stats,types } ) => (
                        <PokemonCard 
                                key={name_clean}
                                name_clean={name_clean}
                                img={img} 
                                attack={stats.attack} 
                                defense={stats.defense} 
                                types={types} 
                        />
                    ))
                }
            </div>
            
        </div>
    );
};

export default Pokedex;