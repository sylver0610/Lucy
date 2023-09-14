`use strict`

const { OK, CREATED } = require("../core/success.response");
const AllCode = require("../services/allcode.service");
const PetService = require("../services/pet.service");
const UserService = require("../services/user.service");

class UserController {
    getAllUser = async (req, res, next) => {
        console.log(`[P]::GET ALL USERS::`)
        new OK({
            message: `GetAll user success`,
            metadata: await UserService.getAllUser()
            // DT: await ParticipantService.getListUser()
        }).send(res)
    };

    //UPDATE USER
    putUpdateUser = async (req, res, next) => {
        console.log(`[P]::PUT UPDATE USER::`)
        // const obj = JSON.parse(JSON.stringify(req.body))
        new OK({
            message: `Update the participant success`,
            metadata: await UserService.putUpdateUser(req.body)
        }).send(res)
    };

    //DELETE USER
    deleteUser = async (req, res, next) => {
        console.log(`[P]::DELETE USER:: ${req.query.id}`)
        new OK({
            message: `Delete the user success`,
            metadata: await UserService.deleteUser(req.query.id)
        }).send(res)
    };

    //GET USER WITH PAGINATE
    getUserWithPaginate = async (req, res, next) => {
        //params
        let page = req.query.page;
        let limit = req.query.limit;
        console.log(`[P]::GET USERS WITH PAGINATE:: page: ${page}  and limit: ${limit}`)
        new OK({
            message: `Get list participants success`,
            metadata: await UserService.getUserWithPaginate(page, limit)
        }).send(res)
    }

    postCreateUser = async (req, res, next) => {
        console.log(`[P]::POST CREATE USER:: `)
        new CREATED({
            message: `Create a new participant success`,
            metadata: await UserService.postCreateUser(req.body)

        }).send(res)
    };

    postCreatePet = async (req, res, next) => {
        console.log(`[P]::POST CREATE Pet:: `)
        new CREATED({
            message: `Create a new pet success`,
            metadata: await PetService.postCreatePet(req.body)

        }).send(res)
    };

    getAllPet = async (req, res, next) => {
        console.log(`[P]::Get All Pet:: `)
        new CREATED({
            message: `Get All Pet success`,
            metadata: await PetService.getAllPet(req.body)

        }).send(res)
    };

    //GET USER WITH PAGINATE
    getPetWithPaginate = async (req, res, next) => {
        //params
        let page = req.query.page;
        let limit = req.query.limit;
        console.log(`[P]::GET USERS WITH PAGINATE:: page: ${page}  and limit: ${limit}`)
        new OK({
            message: `Get list pets success`,
            metadata: await PetService.getPetWithPaginate(page, limit)
        }).send(res)
    }

    getAllCode = async (req, res, next) => {
        let type = req.query.type
        console.log(`GET ALL CODES:: ${type}`)

        new OK({
            message: `Get all codes success`,
            metadata: await AllCode.getAllCode(type)
        }).send(res)
    }

    /*
    
    
    
    */


}


module.exports = new UserController()