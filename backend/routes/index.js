const router = require("express").Router();
const methodOfTransportController = require('../controllers/MethodOfTransportController');
const transportLineController = require('../controllers/TransportLineController');
router.get('/methods',methodOfTransportController.getAllMethods);
router.get('/lines',transportLineController.getTransportLines);
module.exports = router;