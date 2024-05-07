const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Підключено до MongoDB');
  } catch (error) {
    console.error('Не вдалося підключитися до MongoDB', error);
  }
};

module.exports = connectDB;