const Broker = require('../models/broker.js');

exports.getBroker = async (req, res) => {
  try {
    const broker = await Broker.findById();
    if (!broker || broker.length === 0) {
      return res.status(404).json({
        message: 'Не знайдено жодного брокера'
      });
    }
    res.status(200).json(broker);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Помилка сервера'
    });
  }
};