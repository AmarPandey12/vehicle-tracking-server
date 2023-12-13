console.log(`welcome to get vehicle service`);
const request = require('request');
const axios = require('axios');




const getVehicleServices = async () =>{
    // function makeMyRequest(url, token) {
    //     return new Promise(function (resolve, reject) {
    //     request(url, function (error, res, body) {
    //         if (!error && res.statusCode === 200) {
    //         resolve(body);
    //         } else {
    //         reject(error);
    //         }
    //     });
    //     });
    // }

    // const optionsToken = {
    //     'method': 'GET',
    //     'url': 'https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"5560db8f4a2317dfb4690c5273a984098D637F85A0851AC11CC6D0450DC3A9CFB006FA40"}',
    //     'headers': {
    //     }
    // };

    // const optionsGetAllVehicles = {
    //     'method': 'GET',
    //     'url': `https://hst-api.wialon.com/wialon/ajax.html?svc=core/update_data_flags&params={"spec":[{"type":"type","data":"avl_unit","flags":1025,"mode":0}]}&sid=${token}`,
    //     'headers': {
    //     }
    // }; 



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
        console.log(token);

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

        const vehicleData = res.data;
        // console.log(vehicleData);

        return vehicleData;

        // let response = await makeMyRequest(optionsToken);
        // // console.log(response); // `response` will be whatever you passed to `resolve()` at the top
        // const callResponse = JSON.parse(response);
        // const tokenEid = callResponse.eid;

        // let allVehicles = await makeMyRequest(optionsGetAllVehicles, tokenEid);
        // const getAllVehicleCallResponse = JSON.parse(response);
        
        // console.log('>>>>>>>>>>>>>>>> ' + getAllVehicleCallResponse);
        // // const token = tokenEid;
        // return getAllVehicleCallResponse;
      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
    
    


module.exports = {
    getVehicleServices
}