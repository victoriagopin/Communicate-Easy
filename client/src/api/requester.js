import axios from "axios";

const baseURL = 'http://localhost:5001';

export async function requester(method, url, data, headers = {}){
    const options = {
        method,
        headers: {
            ...headers,
            'Content-type': 'application/json',
        },
        url: `${baseURL}/${url}`,
        data,
    }

    try{
        const res = await axios(options);
        console.log(res);
        if(res.status == 200){
            return res.data;
        } else if (res == "null"){
            return null;
        }
    } catch (error){
        console.log(error.message);
    }
}

export const get = (url, data, headers) => requester('GET', url, data, headers);
export const post = (url, data, headers) => requester('POST', url, data, headers);
export const put = (url, data) => requester('PUT', url, data);
export const del = (url, data) => requester('DELETE', url, data);