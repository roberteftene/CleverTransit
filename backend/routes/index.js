const router = require("express").Router();
const methodOfTransportController = require('../controllers/MethodOfTransportController');

router.get('/methods',methodOfTransportController.getAllMethods);

module.exports = router;