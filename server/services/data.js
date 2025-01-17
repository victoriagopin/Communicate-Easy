const {Profile} = require("../models/Profile");

async function getById(id){
    return Profile.findById(id).lean();
}

async function createProfile(data){
    const profile = new Profile({
        fullName: data.fullName,
        occupation: data.occupation,
        age: data.age,
        about: data.about,
        owner: data.owner
    });

    await profile.save();
    return profile;
}

async function updateProfile(profileId, profileData){
    const profile = await Profile.findById(profileId);

    if(!profile){
        console.log('No profile found');
    }

    profile.fullName = profileData.fullName;
    profile.occupation = profileData.occupation;
    profile.age = profileData.age;
    profile.about = profileData.about;

    await profile.save();

    return profile;
}

async function deleteProfile(profileId){
    await Profile.findByIdAndDelete(profileId);

    return { success: true, message: "Profile deleted successfully" };
}


module.exports = {
    getById,
    createProfile,
    updateProfile,
    deleteProfile
}