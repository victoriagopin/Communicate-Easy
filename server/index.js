const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
require('dotenv').config();
const {User }= require('./models/User');
const {Profile} = require('./models/Profile');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

const connectionString = 'mongodb://localhost:27017/communicate-easy';

async function configDatabase(){
    await mongoose.connect(connectionString);
    console.log('Database connected');
}

configDatabase();

app.get('/', cors(),(req, res) => {
    res.send('Hello from the server!');
  });

app.post('/login', async(req, res) => {
    const {email, password} = req.body;

    try {
        const exists = await User.findOne({email : email});
        console.log(exists);
        if(exists){
            res.json(exists);
        } else{
            res.json(exists);
        }
    } catch (error) {
        console.log(error.message);
    }
});

app.post('/register', async(req, res) => {
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
            console.log(create);
            res.json(data);
        }
    } catch (error) {
        console.log(error.message);
    }
});

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });