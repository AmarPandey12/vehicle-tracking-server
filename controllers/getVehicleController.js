console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // Calling getVehicle service 
    const vehicleData = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices()));
    let vehicleDetails = [];
    vehicleData.forEach((element, index) => {
        const vehicleSensorData = element.d.sens;
        let sensorData = [];
        let sensorKey;
        for(const [i,val] of Object.entries(vehicleSensorData))
        {
            sensorKey = val.p;
            sensorData.push({'sensor': val.n , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
        }
        vehicleDetails.push({'vehicle': element.d.nm, 'vehicle_id': element.d.id, 'last_location_lat': element.d.lmsg.pos.x, 'last_location_long': element.d.lmsg.pos.y , 'sensor_data': sensorData, 'Time': new Date(element.d.pos.t)})
    });
    res.send(vehicleDetails);
}
module.exports = getVehicleDetails;



