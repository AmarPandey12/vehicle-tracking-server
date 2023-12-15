console.log(`welcome to get vehicle service`);
const axios = require('axios');

const getVehicleServices = async () =>{
    try {
        const res = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'token/login',
                params: '{"token":"5560db8f4a2317dfb4690c5273a984098D637F85A0851AC11CC6D0450DC3A9CFB006FA40"}'
            }
        });

        const token = res.data.eid;

        // Making vehicle detail call
        const vehicleDetails = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'core/update_data_flags',
                params: '{"spec":[{"type":"type","data":"avl_unit","flags":1025,"mode":0}]}',
                sid: token
            }
        });

        const vehicleData = vehicleDetails.data;
        console.log(vehicleData);

        return vehicleData;

      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
    
    


module.exports = {
    getVehicleServices
}