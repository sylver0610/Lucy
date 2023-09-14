`use strict`
const { OK, CREATED } = require("../core/success.response");
const ScheduleService = require("../services/schedule.service");

class ScheduleController {

    postCreateSchedules = async (req, res, next) => {
        console.log(`[P]::POST CREATE SCHEDULE:: `)
        new CREATED({
            message: `Create the schedules succeed`,
            metadata: await ScheduleService.postCreateSchedules(req.body)

        }).send(res)
    };
}

module.exports = new ScheduleController()