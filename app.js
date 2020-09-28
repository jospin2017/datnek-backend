require("dotenv").config();
const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');

var cors = require('cors');


app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Utile pour parser les donnees au format json provenant du client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


require('./routes/langue.router')(app);

app.all(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on port : ",process.env.APP_PORT);
})
