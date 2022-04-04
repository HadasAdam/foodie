const express = require('express'); 
const config = require('./config');
const app = express(); 

app.listen(port, () => console.log(`Listening on port ${config.port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11