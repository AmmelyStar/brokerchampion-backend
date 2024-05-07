const mongoose = require('mongoose');

const brokerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
});

module.exports = mongoose.model('Broker', brokerSchema);



