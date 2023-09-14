`use strict`

const DoctorService = require("../services/doctor.service");
const { OK, CREATED } = require('../core/success.response')

class DoctorController {
    getDocTorLimit = async (req, res, next) => {
        console.log(`[P]::Get Doctor Limit::`, req.query.limit);
        new OK({
            message: `Get list doctor with limit success`,
            metadata: await DoctorService.getDoctorLimit(req.query.limit)
        }).send(res);
        //return res.status(200).json(await AuthService.signUp(req.body))

    };
    postDetailDoctor = async (req, res, next) => {
        console.log(`[P]::POST DETAIL Doctor ::`);
        new CREATED({
            message: `Save data doctor success`,
            metadata: await DoctorService.postDetailDoctor(req.body)
        }).send(res)
    };
    getDetailDoctorById = async (req, res, next) => {
        console.log(`GET DETAIL DOCTOR`)
        new OK({
            message: `Save data detail doctor success`,
            metadata: await DoctorService.getDetailDoctorById(req.query.id)
        }).send(res)
    }
    getScheduleById = async (req, res, next) => {
        console.log(`GET SCHEDULE BY ID `)
        new OK({
            message: `Get data schedule of doctor success`,
            metadata: await DoctorService.getScheduleById(req.query)
        }).send(res)
    }
}

module.exports = new DoctorController()