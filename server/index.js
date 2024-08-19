const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
require('dotenv').config();
const dataRoutes = require('./routes/dataRoutes');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use('/api', dataRoutes);

const connectionString = 'mongodb://localhost:27017/communicate-easy';

async function configDatabase(){
    await mongoose.connect(connectionString);
    console.log('Database connected');
}

configDatabase();

app.get('/', (req, res) => {
    res.send('Hello from the server!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });