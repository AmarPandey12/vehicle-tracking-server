console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    
    const vehicleData = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices()));

    let vehicleDetails = [];
    vehicleData.forEach((element, index) => {
        const vehicleSensorData = element.d.sens;
        let sensorData = [];
        console.log('<<<<<<<<<<<<<<<<');
        console.log(vehicleSensorData);
        res.send(vehicleSensorData);
        vehicleSensorData.forEach((data, index)=>{
            sensorName = data[index + 1].n;
            sensorKey = data[index + 1].p;
            sensorData.push({'sensor name' : sensorName, 'sensor key': sensorKey });
        });

        console.log('hello from sensor', sensorData);
        console.log('>>>>>>>>>>>>>>>>');
        
        // console.log('<<<<<<<<<<<<<<<<');
        // if(element.d.sens[index + 1]){
        //     console.log(element.d.sens[index + 1].p);
        // }
        
        vehicleDetails.push({'vehicle': element.d.nm, 'vehicle Id': element.d.id, 'sensor data': sensorData, 'Time': new Date(element.d.pos.t)})
    });

    res.send(vehicleDetails);
    // return vehicleDetails;
}

module.exports = getVehicleDetails;



