console.log('inside controller');
const request = require('request');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    const getVehicleAccountToken = getVehicleService.getVehicleServices();

    console.log('hell o' + getVehicleAccountToken);
}

module.exports = getVehicleDetails;



