const router = require("express").Router();
const methodOfTransportController = require('../controllers/MethodOfTransportController');
const transportLineController = require('../controllers/TransportLineController');
const reviewController = require('../controllers/ReviewController')


router.get('/methods',methodOfTransportController.getAllMethods);
router.get('/lines',transportLineController.getTransportLines);
router.get('/reviews', reviewController.getAllReviews);
module.exports = router;