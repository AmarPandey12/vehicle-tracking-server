console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    
    const getVehicle = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices()));

    console.log('' + getVehicle);
    // res.send('Hello from server ' + getVehicle);

    let vehicleDetails = [];
    getVehicle.forEach(element => {
        console.log('>>>>>>>>>> ' + element.d.nm);
        vehicleDetails.push(element.d.nm)
    });

    res.send(vehicleDetails);
    // return vehicleDetails;
}

module.exports = getVehicleDetails;



