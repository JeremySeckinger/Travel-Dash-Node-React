
// const path = require('path') //path is core node.js module
const express = require('express');
const mongoose = require('mongoose') // Added in after adding MongoStore session into session middleware (line 36)
const dotenv = require('dotenv');
const morgan = require('morgan'); //shows requests made directly in console (HTTP method and such)
const connectDB = require('./config/db');
const tripsRoutes = require("./routes/trips");
const cors = require('cors');

//* Load config
dotenv.config({ path: './config/.env' })

connectDB()

const server = express();

//* Middleware found on stack overflow to solve preflight response error
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//* Body parser
server.use(express.urlencoded({ extended: false })); //middleware to get data from req.body added after line 17 in trips.js
server.use(express.json()); // accepts json data, added in case needed at some point
server.use(cors());

//* Logging  --> Only want morgan running in dev mode hence the 'if' statement
if(process.env.NODE_ENV === 'development') {
    server.use(morgan('dev')) //morgan middleware
}


server.use('/trips', tripsRoutes);


const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));