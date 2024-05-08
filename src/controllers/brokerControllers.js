const Broker = require('../models/broker');

const getBroker = async (req, res) => {
  try {
    const brokers = await Broker.find({});
     console.log("345345", brokers);
    res.json(brokers);
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch brokers' });
  }
};

module.exports = {
  getBroker
};