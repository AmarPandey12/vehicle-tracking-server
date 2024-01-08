console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    
    const vehicleData = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices()));
    // res.send(vehicleData);

    let vehicleDetails = [];
    vehicleData.forEach((element, index) => {
        const vehicleSensorData = element.d.sens;
        let sensorData = [];
        // console.log('<<<<<<<<<<<<<<<<');
        
        for(const [i,val] of Object.entries(vehicleSensorData))
        {
            console.log('>>>>>>> ' + i, val);
            let sensorKey = val.p;
            sensorData.push({'sensor': val.n , 'key': sensorKey, 'value': element.d.lmsg.p.sensorKey});
        }
            
        

        console.log('hello from sensor', sensorData);
        console.log('>>>>>>>>>>>>>>>>');
        
        
        
        vehicleDetails.push({'vehicle': element.d.nm, 'vehicle Id': element.d.id, 'sensor data': sensorData, 'Time': new Date(element.d.pos.t)})
    });

    res.send(vehicleDetails);
    // return vehicleDetails;
}

module.exports = getVehicleDetails;



