const express = require('express')
const { asyncHandler } = require('../../auth/authCheck');
const doctorController = require('../../controllers/doctor.controller');
const router = express.Router()

router.get('/', asyncHandler(doctorController.getDocTorLimit))

router.post('/', asyncHandler(doctorController.postDetailDoctor))

router.get('/detail-doctor-by-id', asyncHandler(doctorController.getDetailDoctorById))

router.get('/get-schedule-of-doctor-by-id', asyncHandler(doctorController.getScheduleById))

module.exports = router