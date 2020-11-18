import { useEffect, useState } from "react";
import req from "../utils/request";

interface IData {
    pokemons:[]
  }
  
  const useData = (endpoint: string,query:object, deps:any[]=[]) =>{
    const [data, setPokemons] = useState<IData>({pokemons:[]});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
     
    useEffect(()=>{
  
      const getData = async()=>{
  
        setIsLoading(true)
        try{
          const result = await req(endpoint, query);
          
          setPokemons(result);
        } catch(e){
          setIsError(true);
        } finally{
          setIsLoading(false)
        }
        
      }
  
      getData();
    },deps);
  
    return {
      data,
      isError,
      isLoading
  
    }
  }
  
  export default useData;