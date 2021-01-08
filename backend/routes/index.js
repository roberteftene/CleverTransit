// const router = require("express").Router();
const express = require('express')
const router = express()
const methodOfTransportController = require('../controllers/MethodOfTransportController');
const transportLineController = require('../controllers/TransportLineController');
const reviewController = require('../controllers/ReviewController')


router.get('/methods',methodOfTransportController.getAllMethods);

router.get('/lines',transportLineController.getTransportLines);
router.get('/transport-method/:id/lines',transportLineController.getTransportLineByTransportMethodId);
router.post('/lines',transportLineController.addTransportLine);
router.put('/lines/:id',transportLineController.editTransportLine);

router.get('/reviews', reviewController.getAllReviews);
router.get('/reviews/:id',reviewController.getReviewById)
router.get('/lines/:id/reviews',reviewController.getReviewsByLineId)
router.delete('/reviews/:id', reviewController.deleteReview);
router.post('/reviews',reviewController.addReview);
router.put('/reviews/:id',reviewController.editReview);
module.exports = router;