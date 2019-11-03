"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.connect(dbConfig.url, { useNewUrlParser: true}).then(()=>{
    console.log('You are connected with database');
}).catch(err=>{
    console.log('Unable to connect with the database', err);
    process.exit();
});

// create express app
const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
require('./app/routes/user.routes')(app);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});