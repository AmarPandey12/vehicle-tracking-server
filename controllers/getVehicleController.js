console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    
    const getVehicleAccountToken = await getVehicleService.getVehicleServices();

    console.log('' + getVehicleAccountToken);
    res.send('Hello from server ' + getVehicleAccountToken);

    let vehicleDetails = [];
    getVehicleAccountToken.forEach(element => {
        console.log('>>>>>>>>>> ' + element.d.nm);
        vehicleDetails.push(element.d.nm)
    });

    return vehicleDetails
}

module.exports = getVehicleDetails;



