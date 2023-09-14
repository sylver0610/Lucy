`use strict`

const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../auth/authCheck');
const userController = require('../../controllers/user.controller')

router.get('/', asyncHandler(userController.getAllCode))

module.exports = router;
