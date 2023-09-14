'use strict'

const express = require('express');
const authController = require('../../controllers/auth.controller');
// const quizController = require('../../controllers/quiz.controller');
const { asyncHandler } = require('../../auth/authCheck');
const { verifyAccessToken } = require('../../auth/authUtils');
// var multer = require('multer');
// var upload = multer();
const router = express.Router();

//signUp
router.post('/register', asyncHandler(authController.registerUser))

//login
router.post('/login', asyncHandler(authController.loginUser))

//refresh-token
// router.post('/refresh-token', asyncHandler(authController.requestRefreshToken))

// //logout
// router.post('/logout', asyncHandler(authController.logoutUser))

// //over view
// router.get('/overview', asyncHandler(authController.overView))

// // =>> user
router.use('/user', verifyAccessToken, require('../user'));

// // =>> allcode
router.use('/allcode', verifyAccessToken, require('../allcodes'));

// // =>> doctor
router.use('/doctor', require('../doctor'));

// // =>> schedule
router.use('/schedule', verifyAccessToken, require('../schedule'));

//hello world
router.get("/", (req, res) => {

    return res.status(200).json({
        message: 'Welcome'
    })
})

module.exports = router;