console.log(`welcome to get vehicle service`);
const request = require('request');




const getVehicleServices = async () =>{

    
    function doRequest(url) {
        return new Promise(function (resolve, reject) {
        request(url, function (error, res, body) {
            if (!error && res.statusCode === 200) {
            resolve(body);
            } else {
            reject(error);
            }
        });
        });
    }

    // var token;
    console.log(`welcome to get vehicle service`);
    var options = {
        'method': 'GET',
        'url': 'https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"5560db8f4a2317dfb4690c5273a984098D637F85A0851AC11CC6D0450DC3A9CFB006FA40"}',
        'headers': {
        }
    };

    try {
        let response = await doRequest(options);
        // console.log(response); // `response` will be whatever you passed to `resolve()` at the top
        const callResponse = JSON.parse(response);
        const tokenEid = callResponse.eid;
        console.log('>>>>>>>>>>>>>>>> ' + tokenEid);
        const token = tokenEid;
        return token;
      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }

    // await request(options, function (error, response) {
    // if (error) throw new Error(error);
    //     const callResponse = JSON.parse(response.body);
    //     const tokenEid = callResponse.eid;
    //     console.log('>>>>>>>>>>>>>>>> ' + tokenEid);
    //     const token = tokenEid;
    //     return token;
        
    // });

    
    
}
    
    


module.exports = {
    getVehicleServices
}