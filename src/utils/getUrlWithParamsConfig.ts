import config from '../config'
import useData from '../hook/getData';

function getUrlWithParamsConfig (endpointConfig: string, query: object){

    let url ={
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,

        query:{
            ...query
        }
    }
    
    return url;
}

export default getUrlWithParamsConfig;