import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';

interface IPokemon{
    name_clean:string
    attack?: number
    defense?: number
    types?: string[]
    img:string
}

const PokemonCard: React.FC<IPokemon> = ({name_clean, attack, defense, img, types}) => {
    return (
        <div className={s.root} key={name_clean}>
            <div className={s.infoWrap}>
               
                <Heading element={'p'}  >
                    {name_clean}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {defense}
                        </div>
                        Defense
                    </div>
                </div>
                {
                    types?.map((name)=>(
                        <div className={s.labelWrap} key={name}>
                            <span className={s.label}>{name}</span>
                        </div>
                    ))
                }
                
            </div>
            <div className={s.pictureWrap}>
                <img src={img} alt={name_clean} />
            </div>
        </div>
    );
};

export default PokemonCard;