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
    getVehicle.forEach((element, index) => {
        console.log('>>>>>>>>>> ' + element.d.nm);
        console.log(index);
        console.log(element.d.sens[index]);
        console.log('<<<<<<<<<<<<<<<<');
        // console.log(element.d.sens[index].p);
        // console.log('engine hour sensor key', sensorData);
        // let sensorData = [];
        // console.log(element.d.sens[index]);
        // // sensorData.push({'sensor' : element.d.sens['1'].n, 'key': element.d.sens['1'].p, 'value': element.d.lmsg.p[element.d.sens['1'].p] });
        // sensorData.push({'sensor' : element.d.sens[index].n});
        // console.log('sens keys ', sensorData);
        // console.log('engine hour sensor key', element.d.sens[1].p);
        // console.log('engine hour sensor key', element.d.sens[2].p);
        // console.log('engine hour sensor key', element.d.sens[3].p);
        // console.log('engine hour sensor key', element.d.sens[4].p);
        
        vehicleDetails.push({'vehicle': element.d.nm, 'vehicle Id': element.d.id, 'Time': new Date(element.d.pos.t)})
    });

    res.send(vehicleDetails);
    // return vehicleDetails;
}

module.exports = getVehicleDetails;



