`use strict`
const { ConflictRequestError } = require("../core/error.response")
const _ = require('lodash')
const db = require("../models/index")
const moment = require('moment')
const { Op } = require("sequelize");
const Schedule = db.Schedule
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE
class ScheduleService {
    static postCreateSchedules = async ({ doctorId, date, time }) => {
        const bulkArr = []
        time.map(item => {
            bulkArr.push({
                doctorId, date: date, timeType: item, maxNumber: MAX_NUMBER_SCHEDULE
            })
        })
        // console.log(moment(date).add(12, 'h').format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
        let existing = await Schedule.findAll({
            where: {
                doctorId: doctorId,
                date: date
            },
            attributes: ['timeType', 'date', 'doctorId', 'maxNumber']
        })

        let toCreate = _.differenceWith(bulkArr, existing, (a, b) => {
            return a.timeType === b.timeType
                && moment(a.date).format('YYYY-MM-DD') === b.dataValues.date
        })


        // console.log(`schedule `, bulkArr)        
        // console.log(`exist `, existing)
        // console.log(`toCreate`, toCreate)


        const result = await Schedule.bulkCreate(toCreate)
        if (!result)
            throw new ConflictRequestError(`Error when create schedule`)
        // console.log(result)
        return toCreate
    }
}

module.exports = ScheduleService