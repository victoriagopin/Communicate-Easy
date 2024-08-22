const{ Router } =require('express');
const {User }= require('../models/User');

const userRouter = Router();

userRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;

    try {
        const exists = await User.findOne({email : email});

        if(exists){
            res.json(exists);
        } else{
            res.json(exists);
        }
    } catch (error) {
        console.log(error.message);
    }
});

userRouter.post('/register', async(req, res) => {
    const {email, password} = req.body;

    const data = {
        email: email,
        password : password
    }

    try {
        const exists = await User.findOne({email : email});

        if(exists){
            res.json(null);
        } else{
            const create = await User.insertMany([data]);
            res.json(create[0]);
        }
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = {userRouter}