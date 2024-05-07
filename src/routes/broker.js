const express = require('express');
const {getBroker} = require('../controllers/brokerControllers')


const brokerRouter = express.Router();

brokerRouter.get("/broker",  getBroker);


module.exports = brokerRouter;