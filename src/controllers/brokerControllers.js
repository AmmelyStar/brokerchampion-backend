const Broker = require('../models/broker');

exports.getBroker = async (req, res) => {
  try {
    const brokers = await Broker.find();
    res.status(200).json(brokers);
  } catch (error) {
    res.status(500).json({
      message: 'Помилка сервера'
    });
  }
};