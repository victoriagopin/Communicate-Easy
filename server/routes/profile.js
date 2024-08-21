const { Router } = require('express');
const { createProfile, getById} = require('../services/data');

const profileRouter = Router();

profileRouter.get('/profile', async (req, res) => {
    const profileId = req.headers['x-profile-id'];
    const profile = await getById(profileId);

    res.json(profile);
})

profileRouter.post('/create-profile', async (req, res) => {
    const ownerId = req.headers['x-user-id'];
    console.log(ownerId);
    const result = await createProfile(req.body, ownerId);

    res.json(result);
})

module.exports = {
    profileRouter
}