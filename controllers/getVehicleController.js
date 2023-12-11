console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    // Calling getVehicle service 
    
    
    async function getVehicleAccountTokenFunc(){
        const getVehicleAccountToken = getVehicleService.getVehicleServices();
        await console.log('hell o' + getVehicleAccountToken);
        return 'hello';
    }


    
}

module.exports = getVehicleDetails;



