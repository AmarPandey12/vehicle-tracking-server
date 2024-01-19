console.log(`welcome to get vehicle service`);
const axios = require('axios');

const getVehicleServices = async (sidToken) =>{
    try {
        // ?svc=core/create_auth_hash&params={}&sid=048a43f1e1984feb9534f6d0fb417e99
        const res = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'core/create_auth_hash',
                params: '{}',
                sid: sidToken
            }
        });
        console.log('checkpoint 1');
        let token = res.data;
        console.log('>>>>>>> ' + token);

        // Making vehicle detail call
        const vehicleDetails = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'core/update_data_flags',
                params: '{"spec":[{"type":"type","data":"avl_unit","flags":5121,"mode":0}]}',
                sid: token
            }
        });
        const vehicleData = vehicleDetails.data;
        return vehicleData;

      } catch (error) {
        console.log('checkpoint 2');
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
module.exports = {getVehicleServices};