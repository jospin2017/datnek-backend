require("dotenv").config();
const express = require("express");

const bodyParser = require('body-parser');

const app = express();

//Utile pour parser les donnees au format json provenant du client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('./routes/langue.router')(app);



app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on port : ",process.env.APP_PORT);
})