const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express()

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db
require('./dbs/init.mongodb.js')

// const { checkOverLoad } = require('./helpers/check.connect.js');
// checkOverLoad()
//init router
app.get('/', (req, res, next) => {
    const strCompress = 'Hello Server!'
    return res.status(200).json({
        message: 'Welcome'

    })
})

//handling error

module.exports = app;
