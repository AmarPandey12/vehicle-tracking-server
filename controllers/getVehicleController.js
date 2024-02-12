console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails controller:: ');
        // Calling getVehicle service 
        const sid = req.query.sid;
        console.log('>>>>>>> ' + sid);
        const vehicleData = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices(sid)));
        let vehicleDetails = [];
        // console.log(vehicleData);
    
        vehicleData.forEach((element, index) => {
            const vehicleSensorData = element.d.sens;
            let sensorData = [];
            let sensorKey;
            for(const [i,val] of Object.entries(vehicleSensorData))
            {
                const sensorName = val.n;
                const sensorKey = val.p;
                console.log('SENSOR KEY ' + sensorKey);
                // Get fuel volume total sensor volume
                if(sensorName == 'Fuel Volume Total'){
                    console.log('SENSOR KEY 1 ' + sensorKey);                    
                    sensorData.push({'sensor': 'Fuel' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }

                // Get engine hour or Ignition
                if(sensorName == 'Engine Hour'){
                    console.log('SENSOR KEY 2' + sensorKey);
                    sensorData.push({'sensor': 'Engine' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else if(sensorName == 'Ignition'){
                    console.log('SENSOR KEY 3' + sensorKey);
                    sensorData.push({'sensor': 'Engine' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }
                
                
            }
            vehicleDetails.push({'vehicle': element.d.nm, 'vehicle_id': element.d.id, 'last_location_lat': element.d.lmsg.pos.x, 'last_location_long': element.d.lmsg.pos.y , 'sensor_data': sensorData, 'Time': new Date(element.d.pos.t * 1000), 'org_timestamp': element.d.pos.t})
        });
        res.send(vehicleDetails);
    }catch(err){
        return err;
    }
    
}
module.exports = getVehicleDetails;



