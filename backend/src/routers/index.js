'use strict'

const express = require('express');

const router = express.Router();

//check apiKey
// router.use();
//check permission

router.use('/v1/api', require('./access'))
// router.get('', (req, res, next) => {
//     const strCompress = 'Hello Server!'
//     return res.status(200).json({
//         message: 'Welcome'

//     })
// })

module.exports = router;