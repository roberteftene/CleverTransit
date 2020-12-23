// const router = require("express").Router();
const express = require('express')
const router = express()
const methodOfTransportController = require('../controllers/MethodOfTransportController');
const transportLineController = require('../controllers/TransportLineController');
const reviewController = require('../controllers/ReviewController')


router.get('/methods',methodOfTransportController.getAllMethods);
router.get('/lines',transportLineController.getTransportLines);
router.get('/reviews', reviewController.getAllReviews);
router.get('/transport-method/:id/lines',transportLineController.getTransportLineByTransportMethodId);
module.exports = router;