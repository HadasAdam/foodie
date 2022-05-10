const express = require('express'); 
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express(); 
const path = require('path');
const users = require('./routes/usersRoute');
const posts = require('./routes/postRoute');

//connecting to database
mongoose.connect(config.mongoConnectionString);

//logs when database connection is successful
mongoose.connection.on('connection', () => {
  console.log("Connected to MongoDB");
});

//logs databse errors
mongoose.connection.on('error', (error) => {
  console.log(error);
});

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
app.use('/api/users', users);

//sets the posts path
app.use('/api/posts', posts)

app.listen(config.port, () => console.log(`Listening on port ${config.port}`)); //Line 6