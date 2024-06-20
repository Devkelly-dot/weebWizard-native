import axios from 'axios';
import { config } from '../config';

export async function authGet(endpoint, token) {
    try {
        let headers = {

        }

        if(token) {
            headers.Authorization = 'Bearer ' + token;
        }

        const url = `${config.api_url}/${endpoint}`;
        const response = await axios.get(url, {headers});
        return response.data;
    } catch (e) {
        if(e.response?.data) {
            return {
                error: e.response.data
            }
        }
    }
};

export async function authPost(endpoint, token, body) {
    let headers = {

    }

    if(token) {
        headers.Authorization = 'Bearer ' + token;
    }

    const url = `${config.api_url}/${endpoint}`;
    
    try {
        const response = await axios.post(url, body, {headers});
        return response.data;
    } catch (e) {
        if(e.response?.data) {
            return {
                error: e.response.data
            }
        }
    }
};