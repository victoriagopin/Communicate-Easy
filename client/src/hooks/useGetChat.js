import { useEffect, useState } from "react";
import { get } from "../api/requester";

export function useGetChat(senderId, recieverId){
    const [chat, setChat] = useState(null);

    useEffect(() => {
        const getChat = async () => {
                const res = await get('chat', {},
                {'x-participants': `${senderId},${recieverId}`});
              setChat(res);
        }

        getChat();
    },[]);

    return {
        chat,
        setChat
    }
}