console.log('inside route');

const express = require('express');
const router = express.Router();
const getVehicleController = require('../controllers/getVehicleController');

router.route("/").get((req, res)=>{
    res.send('Welcome to Technoton IT Solution');
});
router.route("/getVehicles").get(getVehicleController);

module.exports = router; 