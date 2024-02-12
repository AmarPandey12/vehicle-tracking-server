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

                 // Get engine hour or Ignition
                 if(sensorName == 'Engine Hour'){
                    console.log('SENSOR KEY 2' + sensorName);
                    sensorData.push({'engine_sensor': 'Engine' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else if(sensorName == 'Ignition'){
                    console.log('SENSOR KEY 3' + sensorName);
                    sensorData.push({'engine_sensor': 'Engine' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else{
                    sensorData.push({'engine_sensor': 'Engine' , 'key': 'N/A', 'value': 'N/A'});
                }

                // Get fuel volume total sensor volume
                if(sensorName == 'Fuel Volume Total'){
                    console.log('SENSOR KEY 1 ' + sensorName);                    
                    sensorData.push({'fuel_sensor': 'Fuel' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else{
                    sensorData.push({'fuel_sensor': 'Fuel' , 'key': 'N/A', 'value': 'N/A'});
                }

                // Get power sully status
                if(sensorName == 'Power Supply Status'){
                    console.log('SENSOR KEY 2' + sensorName);
                    sensorData.push({'power sensor': 'Power' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else if(sensorName == 'Supply Power'){
                    console.log('SENSOR KEY 3' + sensorName);
                    sensorData.push({'power_sensor': 'Power' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else{
                    sensorData.push({'power_sensor': 'Power' , 'key': 'N/A', 'value': 'N/A'});
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



