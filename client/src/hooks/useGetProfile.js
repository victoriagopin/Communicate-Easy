import { useContext, useEffect, useState } from "react";
import { get } from "../api/requester";
import { UserContext } from "../contexts/UserContext";

export function useGetProfile(id){
    const [profile, setProfile] = useState({});
    const {user} = useContext(UserContext);

    useEffect(() => {
        
        const getProfile = async () => {
            if(user){
            try {
                const result = await get(`profile?owner=${user?._id}`);

                setProfile(result);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
        getProfile();
    }, [id]);

    return {
        profile
    }
}