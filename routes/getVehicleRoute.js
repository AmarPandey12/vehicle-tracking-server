console.log('inside route');

const express = require('express');
const router = express.Router();
const getVehicleController = require('../controllers/getVehicleController');

router.route("/").get(getVehicleController);

module.exports = router; 