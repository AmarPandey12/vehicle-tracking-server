console.log(`welcome to get vehicle service`);
const request = require('request');


const getVehicleServices = () =>{
    console.log(`welcome to get vehicle service`);
    var options = {
        'method': 'GET',
        'url': 'https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"5560db8f4a2317dfb4690c5273a984098D637F85A0851AC11CC6D0450DC3A9CFB006FA40"}',
        'headers': {
        }
    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
        console.log('SWITCH');
        console.log(JSON.parse(response.body));
        const token = 'static'
        return token;
        
    });

        // res.send('response from controller HI');
    
    }
    
    


module.exports = {
    getVehicleServices
}