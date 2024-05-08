const express = require('express');
const {getBroker} = require('../controllers/brokerControllers')


const brokerRouter = express.Router();

brokerRouter.get("/",  getBroker);


module.exports = brokerRouter;