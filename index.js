const express = require('express');
// const router = require('express.Router');
const app = express();
const vehicleRoutes = require('./routes/getVehicleRoute')

const PORT = process.env.port || 5000;

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.use("/", vehicleRoutes);

// app.get('/', (req, res)=>{
//     res.send(`This route is for application root`);
// });

app.listen(PORT, ()=>{
    console.log(`app is successfully runnning on port ${PORT}`);
});