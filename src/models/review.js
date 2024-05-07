const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String
    },
    broker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Broker', required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);