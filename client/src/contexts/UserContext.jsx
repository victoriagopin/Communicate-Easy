import { createContext, useEffect, useState } from "react";
import { get } from "../api/requester";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [hasProfile, setHasProfile] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const getProfile = async () => {
           if(user){
                const profile =  await get(`profile?owner=${user?._id}`);

                if(profile){
                    setHasProfile(true);
                    setProfile(profile);
                }
            }
        }

        getProfile();
    },[user]);

    return(
        <UserContext.Provider value={{user, setUser, hasProfile, profile, setProfile}}>
            {children}
        </UserContext.Provider>
    )
}