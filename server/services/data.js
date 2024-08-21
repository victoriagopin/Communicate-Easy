const {Profile} = require("../models/Profile");

async function getById(id){
    return Profile.findById(id).lean();
}

async function createProfile(data, ownerId){
    const profile = new Profile({
        fullName: data.fullName,
        occupation: data.occupation,
        age: data.age,
        about: data.about,
        owner: ownerId
    });

    await profile.save();
    return profile;
}

module.exports = {
    getById,
    createProfile
}