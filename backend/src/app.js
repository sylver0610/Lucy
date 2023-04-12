require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express()

// console.log(`Process:: `, process.env)
//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json())
app.use(express.urlencoded({
    extends: true
}));
//init db
require('./dbs/init.mongodb.js')

// const { checkOverLoad } = require('./helpers/check.connect.js');
// checkOverLoad()
//init router
app.use('/', require('./routers/index.js'))

//handling error

module.exports = app;
