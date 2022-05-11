const express = require('express'); 
const mongoose = require('mongoose');
const router = require ('./router')
const config = require('./config');
const bodyParser = require('body-parser');
const app = express(); 
const path = require('path');


const ConnectionString = config.mongoConnectionString;

mongoose.connect(ConnectionString,{useNewUrlParser:true, useUnifiedTopology: true },(err)=>{
  if(err) {
      console.log(err.message)
  }else{
      console.log("Successfully Connected to mongodb");
  }
})


//middleware to make sure ContentType header is matching the type option, and to parse query strings with the queryStrings library
app.use(bodyParser.urlencoded({extended: false})); 

//middleware to parse body requests to json object
app.use(bodyParser.json());

//middleware to handle cors and preflight requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});

//sets the users path

app.use(router);
app.listen(config.port, () => console.log(`Listening on port ${config.port}`)); //Line 6