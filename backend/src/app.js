require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
var os = require('os');

// console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())
// console.log(`Process:: `, process.env)
//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json())
app.use(express.urlencoded({
    extends: true
}));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    // credentials: true,

}

app.use(cors(corsOptions));
//init db
require('./dbs/init.postgres.js')

// const { checkOverLoad } = require('./helpers/check.connect.js');
// checkOverLoad()
//init router
app.use('/', require('./routers/index.js'))

//handling error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    // console.log(error.status);
    const statusCode = error.status || 500
    // console.log(error)
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
})
module.exports = app;
