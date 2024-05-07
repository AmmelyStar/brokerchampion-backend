const Joi = require('joi');

const brokerSchema = Joi.object({
  name: Joi.string().required(),
  country: Joi.string().required(),
  rating: Joi.number().required(),
  reviews: Joi.array().items(Joi.string())
});

module.exports = brokerSchema;