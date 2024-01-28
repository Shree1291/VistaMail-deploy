import axios from 'axios';

const API_URI = 'https://jungle-green-bullfrog-vest.cyclic.app'; 

const API_ECHOINBOX = async (urlObject, payload={}, type='') => {
    return await axios ({
        method: urlObject.method, 
        url: `${API_URI}/${urlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_ECHOINBOX;
