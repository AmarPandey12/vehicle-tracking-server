console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails controller:: ');
        // Calling getVehicle service 
        const sid = req.query.sid;
        // console.log('>>>>>>> ' + sid);
        const vehicleData = JSON.parse(JSON.stringify(await getVehicleService.getVehicleServices(sid)));
        let vehicleDetails = [];
        // console.log(vehicleData);
        // res.send(vehicleData);
    
        vehicleData.forEach((element, index) => {
            console.log('Check point 1');
            const vehicleSensorData = element.d.sens;
            let sensorData = [];
            // let sensorKey = ;
            for(const [i,val] of Object.entries(vehicleSensorData))
            {
                let sensorKey = val.p;
                let sensorName = val.n;
                console.log('Hi ', sensorName);
                // sensorData.push({'sensor': element.d.sens[i].n , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                // Get engine hour or Ignition

                if(sensorName == 'Engine Hour' || 'Ignition'){
                    console.log(sensorName);
                    sensorData.push({'sensor_name': sensorName , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                }else{

                }
                // }else if(sensorKey == 'Ignition'){
                //     sensorData.push({'sensor': 'Engine' , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                // }
            }
            
            vehicleDetails.push({
                'vehicle': element.d.nm, 
                'vehicle_id': element.d.id, 
                'last_location_lat': (element.d.lmsg.pos) ? element.d.lmsg.pos.x : 'N/A',
                'last_location_long': (element.d.lmsg.pos)  ? element.d.lmsg.pos.x : 'N/A',
                'Time': new Date(element.d.pos.t * 1000), 
                'org_timestamp': element.d.pos.t,
                'sensor_data': sensorData
            })

        });

        // console.log(vehicleDetails);

        res.send(vehicleDetails);
    }catch(err){
        return err;
    }
    
}
module.exports = getVehicleDetails;


