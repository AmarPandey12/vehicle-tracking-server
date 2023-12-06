console.log('inside controller');
const request = require('request');

const getVehicleDetails = async (req, res)=>{
    console.log('inside getVehicleDetails controller:: ');
    // console.log(`receiving vehicle controller request body ${request.query.params}`);

    var options = {
    'method': 'GET',
    'url': 'https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"5560db8f4a2317dfb4690c5273a984098D637F85A0851AC11CC6D0450DC3A9CFB006FA40"}',
    'headers': {
    }
    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
        console.log(response.body);
    });
    res.send('response from controller HI');
}

module.exports = getVehicleDetails;



