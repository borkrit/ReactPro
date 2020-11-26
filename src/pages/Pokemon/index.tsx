import React from "react";
import useData from "../../hook/getData";

export interface IPokemonProps{
    id: string | number
}

const Pokemon: React.FC<IPokemonProps>=({id})=>{

    const {data, isLoading} =useData('getPokemon',{id});

    if(isLoading){
        return(<div>Loading...</div>)
    }

    return(
        <div>
            <h1>worek {data?.name}</h1>
        </div>
    );
};

export default Pokemon;