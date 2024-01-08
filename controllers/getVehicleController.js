console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    
    const vehicleData = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices()));
    res.send(vehicleData);

    let vehicleDetails = [];
    vehicleData.forEach((element, index) => {
        const vehicleSensorData = JSON.toString(element.d.sens);
        let sensorData = [];
        console.log('<<<<<<<<<<<<<<<<');
        console.log(vehicleSensorData);
        

        // Object.entries(vehicleSensorData).forEach(
        //     ([key, value]) => {
        //         console.log(key, value);
        //         sensorData.push({'sensor name': key, 'sensor key': value});
        // });
            
        // vehicleSensorData.forEach((data, index)=>{
        //     sensorName = data[index + 1].n;
        //     sensorKey = data[index + 1].p;
        //     sensorData.push({'sensor name' : sensorName, 'sensor key': sensorKey });
        // });

        console.log('hello from sensor', sensorData);
        console.log('>>>>>>>>>>>>>>>>');
        
        
        
        vehicleDetails.push({'vehicle': element.d.nm, 'vehicle Id': element.d.id, 'sensor data': sensorData, 'Time': new Date(element.d.pos.t)})
    });

    res.send(vehicleDetails);
    // return vehicleDetails;
}

module.exports = getVehicleDetails;



