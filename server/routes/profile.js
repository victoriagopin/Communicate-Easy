const { Router } = require('express');
const { createProfile, getById, updateProfile} = require('../services/data');
const {  Profile } = require('../models/Profile');


const profileRouter = Router();

profileRouter.get('/profile',async(req, res) => {
    const {owner} = req.query;
    const profile = await Profile.findOne({owner : owner});
  
    if(!profile){ 
        return res.status(404);
    }

    res.json(profile);    
})

profileRouter.post('/create-profile', async (req, res) => {
    const result = await createProfile(req.body);

    res.json(result);
});

profileRouter.post('/edit', async (req, res) => {

    try{
       const updatedProfile = await updateProfile(req.body._id, req.body);
       res.json(updatedProfile);

    } catch (err){
        console.log(err.message);

        return res.status(404);
    }
    
})

profileRouter.get('/search', async (req, res) => {
    const {fullName} = req.query;

    const profile = await Profile.findOne({fullName : fullName});

    res.json(profile);
})

module.exports = {
    profileRouter 
}