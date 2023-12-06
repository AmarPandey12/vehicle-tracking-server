console.log(`welcome to get vehicle service`);

const getVehicleServices = (req,res) =>{
    console.log(`welcome to get vehicle service ${req.body}`);
}

module.exports = {
    getVehicleServices
}