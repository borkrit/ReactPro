import getUrlWithParamsConfig from "./getUrlWithParamsConfig"

describe('getUrlWithParamsConfig',()=>{
    test('должна принимать два аргумента "getPokemons", and empty obj',()=>{
        const url = getUrlWithParamsConfig('getPokemons',{});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query:{},
        })
    });

    test('должна принимать два аргумента "getPokemon", and empty obj',()=>{
        const url = getUrlWithParamsConfig('getPokemon',{id:2});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemon/2',
            query:{},
        })
    });
})