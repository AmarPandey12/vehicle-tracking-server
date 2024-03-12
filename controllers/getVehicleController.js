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
            // console.log('Check point 1');
            const vehicleSensorData = element.d.sens;
            let sensorData = [];
            // let sensorKey = ;
            for(const [i,val] of Object.entries(vehicleSensorData))
            {
                let sensorKey = val.p;
                let sensorName = val.n;
                let sensorMapping = val.tbl
                console.log('Hi ', sensorName);
                // sensorData.push({'sensor': element.d.sens[i].n , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                // Get engine hour or Ignition

                if(sensorName == 'Power Supply Status'){
                    console.log('>>>>>>>>>>>>>>>>>>>>>>>> ' + sensorName);
                    const sensor_value_received = element.d.lmsg.p[sensorKey];
                    // Check if map table is available
                    if(sensorMapping){
                        console.log('Sensor mapping is available');
                        console.log('mapping data ', );
                        try{
                            let sortedData = sortData(sensorMapping);
                            sortedData.forEach((element, index, array) => {
                                console.log('checkpoint 1');
                                if(index < array.length - 1) { 
                                    console.log('checkpoint 2');
                                    console.log(sensor_value_received, array[index].x, array[index + 1].x);
                                    let RANGE_FOUND = inRange(sensor_value_received, array[index].x, array[index + 1].x);
                                    let FINAL_SENSOR_STATUS = (RANGE_FOUND) ? (array[i]?.b) ? 1 : 0 : 0
                                    console.log(FINAL_SENSOR_STATUS);

                                    sensorData.push({'sensor_name': sensorName , 'key': sensorKey, 'value': FINAL_SENSOR_STATUS});
                                }
                            });
                        }catch(err){
                            console.log('here is the error', err);
                            return err;
                        }
                        
                        
                        
                    }else{
                        sensorData.push({'sensor_name': sensorName , 'key': sensorKey, 'value': element.d.lmsg.p[sensorKey]});
                    }
                    
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

function sortData (data){
    let sortedData;
    {
        sortedData = data.sort(function(a,b){
        return a.x - b.x;
        })
    }
    return sortedData;
}

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}


module.exports = getVehicleDetails;


