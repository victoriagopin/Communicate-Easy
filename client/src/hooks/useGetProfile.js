import { useEffect, useState } from "react";
import { get } from "../api/requester";

export function useGetProfile(id){
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const getProfile = async () => {
            try {
                const result = await get('profile', {}, {'x-profile-id': id});

                setProfile(result);
                console.log(result);
            } catch (error) {
                console.log(error.message);
            }
        }
        getProfile();
    }, [id]);

    console.log(profile);
    return {
        profile
    }
}