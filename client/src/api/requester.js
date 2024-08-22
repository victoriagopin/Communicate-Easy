import axios from "axios";

const baseURL = 'http://localhost:5001';

export async function requester(method, url, data){
    const options = {
        method,
        headers: {
            'Content-type': 'application/json',
        },
        url: `${baseURL}/${url}`,
        data,
    }

    try{
        const res = await axios(options); 
    
        if(res.status == 200){
            return res.data;
        } else if (res == "null"){
            return null;
        }
    } catch (error){
        console.log(error.message);
    }
}

export const get = (url, data) => requester('GET', url, data);
export const post = (url, data) => requester('POST', url, data);
export const put = (url, data) => requester('PUT', url, data);
export const del = (url, data) => requester('DELETE', url, data);