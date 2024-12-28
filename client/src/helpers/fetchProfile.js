import { get } from "../api/requester";

export async function fetchProfile(id){
    const profile = await get(`profile?owner=${id}`);
    const name = profile.fullName;
    return {name};
}