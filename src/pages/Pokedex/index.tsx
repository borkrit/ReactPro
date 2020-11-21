import { setQueryParams } from 'hookrouter';
import React, { useEffect, useMemo, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import config from '../../config'
import useData from '../../hook/getData';
import req from '../../utils/request';
import s from './pokedex.module.scss'


const Pokedex = () => {
  const [searchValue,setSearchValue]= useState(''); 
  const [query, setQuery]= useState({});


  const {  
    data,
    isError,
    isLoading
  } = useData('getPokemons', query, [searchValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
    setQuery((s)=>({
      ...s,
      name: e.target.value,
    }));
  }

  if(isLoading){
    return <div>Loading</div>
  }
  if(isError){
    return <div> Error</div>
  }
  return (
        <div>
            <div>
              <input type="text" value={searchValue} onChange={handleOnChange}/>
            </div>
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