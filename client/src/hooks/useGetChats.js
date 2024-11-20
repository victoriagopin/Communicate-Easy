import { useEffect, useState } from "react";
import { get } from "../api/requester";

export function useGetChats(userId){
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const getChats = async () => {
            const res = await get('my-chats', {} ,
                {'x-userId': `${userId}`});

                setChats(res);
        }

        getChats();
    },[]);

    return{
        chats
    }
}