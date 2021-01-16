// const router = require("express").Router();
const express = require('express')
const router = express()
const methodOfTransportController = require('../controllers/MethodOfTransportController');
const transportLineController = require('../controllers/TransportLineController');
const reviewController = require('../controllers/ReviewController')
const userController = require('../controllers/UserController')

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
router.get('/popular-reviews',reviewController.getPopularReviewsByLikes);
router.get('/latest-reviews',reviewController.getLatestReviews);

router.get('/users', userController.getAllUsers);
router.get('/users/:id',userController.getUserById);
router.post('/users',userController.addUser);
router.put('/users/:id',userController.editUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/:id/reviews',userController.getReviewsByUserId);
router.get('/active-users',userController.getActiveUsers);

module.exports = router;