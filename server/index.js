const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
require('dotenv').config();
const { configRoutes } = require('./config/configRoutes');
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

configRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }); 