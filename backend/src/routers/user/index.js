`use strict`

const express = require('express');
const { asyncHandler } = require('../../auth/authCheck');
const userController = require('../../controllers/user.controller')
const router = express.Router();

//GET ALL USERS
router.get("/all", asyncHandler(userController.getAllUser))

//CREATE NEW USER
router.post('/', asyncHandler(userController.postCreateUser))

//CREATE NEW pet
router.post('/create-pet', asyncHandler(userController.postCreatePet))

//get all pet with all client
router.get('/get-pet', asyncHandler(userController.getAllPet))

//GET pet WITH PAGINATE
router.get('/get-pet-paginate', asyncHandler(userController.getPetWithPaginate))

//UPDATE USER
router.put('/', asyncHandler(userController.putUpdateUser))

//DELETE USER
router.delete('/', asyncHandler(userController.deleteUser))

//GET USER WITH PAGINATE
router.get('/', asyncHandler(userController.getUserWithPaginate))



module.exports = router;