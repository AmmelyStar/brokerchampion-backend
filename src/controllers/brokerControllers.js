const Broker = require('../models/broker.js');

const getBroker = (req, res) => {
  Broker.find({})
    .then(brokers => {
      res.json(brokers);
      console.log(brokers);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch brokers' });
    });
};

module.exports = {
  getBroker
};