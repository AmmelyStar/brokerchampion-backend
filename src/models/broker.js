const mongoose = require('mongoose');

const brokerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userRating: {
    type: Number,
    required: true
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String
      }
    }
  ],
  localDownloadSpeed: {
    type: Number,
    required: true
  },
  simultaneousConnections: {
    type: Number,
    required: true
  },
  countriesWithServers: {
    type: Number,
    required: true
  },
  servers: {
    type: Number,
    required: true
  },
  monthlyCost: {
    type: Number,
    required: true
  },
  pricingPlans: [
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      features: {
        type: [String],
        required: true
      }
    }
  ]
});


const Broker = mongoose.model('broker', brokerSchema)
module.exports = Broker;