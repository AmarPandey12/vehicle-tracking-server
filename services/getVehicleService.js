console.log(`welcome to get vehicle service`);
const axios = require('axios');

const getVehicleServices = async (sidToken) =>{
    try {
        const res = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'token/login',
                params: '{"token": "'+sidToken+'"}'
            }
        });

        const token = res.data.eid;
        console.log('>>>>>>> ' + token);

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://hst-api.wialon.com/wialon/ajax.html?svc=core/update_data_flags&params={"spec":[{"type":"type","data":"avl_unit","flags":1025,"mode":0}]}&sid='+token+'"',
            headers: { }
        };
        
        axios.request(config)
            .then((response) => {
            const vehicleData = response.data;
            // console.log(JSON.stringify(response.data));
            console.log('????????? ' + vehicleData);
            return vehicleData;
        })
        .catch((error) => {
            console.log(error);
        });

        // Making vehicle detail call
        // const vehicleDetails = await axios({
        //     method: 'get',
        //     url:'https://hst-api.wialon.com/wialon/ajax.html',
        //     params:{
        //         svc: 'core/update_data_flags',
        //         params: '{"spec":[{"type":"type","data":"avl_unit","flags":5121,"mode":0}]}',
        //         sid: token
        //     }
        // });
        // const vehicleData = vehicleDetails.data;
       

      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
module.exports = {getVehicleServices};