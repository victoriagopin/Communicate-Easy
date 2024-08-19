const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/data', async(req, res) => {
    const data = await User.find();
    res.status(200).json(data);
});

module.exports = router;