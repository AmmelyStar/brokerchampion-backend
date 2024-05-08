require('dotenv').config();
const express = require('express');
const connectDB = require('./db'); 
const brokersRouter = require('./src/routes/broker');

const app = express();

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {      
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

app.use(express.json());
app.use('/api/broker', brokersRouter);