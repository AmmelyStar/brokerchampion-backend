require('dotenv').config();
const express = require('express');
const connectDB = require('./db'); 
const brokersRouter = require('./src/routes/broker');

const app = express();
const PORT = process.env.PORT || 3000;



connectDB()
  .then(() => {
     app.use('/api/broker', brokersRouter);
    app.listen(PORT, () => {      
      console.log(`Сервер запущено на порту ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Помилка підключення до MongoDB:', err);
  });