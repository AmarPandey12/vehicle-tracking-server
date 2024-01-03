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
        console.log('engine hour sensor key', element.d.sens[0].p);
        console.log('engine hour sensor key', element.d.sens[1].p);
        console.log('engine hour sensor key', element.d.sens[2].p);
        console.log('engine hour sensor key', element.d.sens[3].p);
        console.log('engine hour sensor key', element.d.sens[4].p);
        
        vehicleDetails.push({'vehicle': element.d.nm, 'vehicle Id': element.d.id, 'Time': new Date(element.d.pos.t)})
    });

    res.send(vehicleDetails);
    // return vehicleDetails;
}

module.exports = getVehicleDetails;



