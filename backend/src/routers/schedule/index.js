'use strict'

const express = require('express');
const { asyncHandler } = require('../../auth/authCheck');
const scheduleController = require('../../controllers/schedule.controller')

const router = express.Router();

router.post(`/`, asyncHandler(scheduleController.postCreateSchedules))

module.exports = router;