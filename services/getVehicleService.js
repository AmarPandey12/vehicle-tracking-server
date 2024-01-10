console.log(`welcome to get vehicle service`);
const axios = require('axios');

const getVehicleServices = async (sidToken) =>{
    try {
        // const res = await axios({
        //     method: 'get',
        //     url:'https://hst-api.wialon.com/wialon/ajax.html',
        //     params:{
        //         svc: 'token/login',
        //         params: '{"token": "'+sidToken+'"}'
        //     }
        // });

        // const token = res.data.eid;
        // console.log('>>>>>>> ' + token);
        // Making vehicle detail call
        const vehicleDetails = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'core/update_data_flags',
                params: '{"spec":[{"type":"type","data":"avl_unit","flags":5121,"mode":0}]}',
                sid: sidToken
            }
        });
        const vehicleData = vehicleDetails.data;
        console.log('????????? ' + vehicleData);
        return vehicleData;

      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
module.exports = {getVehicleServices};