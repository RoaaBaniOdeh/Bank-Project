
// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require("path");
const bodyParser = require("body-parser");

app.use(`/`, api) 

//to receive data from post method
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bankDB', { useNewUrlParser: true })



const port = 150
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})



