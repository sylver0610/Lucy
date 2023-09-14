const { BadRequestError } = require('../core/error.response');
const db = require('../models/index');

const moment = require('moment')
const User = db.User
const AllCode = db.AllCode
const Markdown = db.Markdown
const Schedule = db.Schedule
const DoctorInfo = db.DoctorInfo
class DoctorService {
    static getDoctorLimit = async (limit) => {
        const maxLimit = await User.count()
        // console.log(`maxlimit ${maxLimit}`)
        const result = await User.findAll({
            limit: limit > maxLimit || limit === 'max' ? maxLimit : limit,
            where: {
                roleId: 'R2'
            },
            order: [['createdAt', 'ASC']],
            attributes: {
                exclude: ['password', 'image']
            },
            include: [
                { model: AllCode, as: 'positionData', attributes: ['valueEn', 'valueVi', 'valueRu'] },
                { model: AllCode, as: 'genderData', attributes: ['valueEn', 'valueVi', 'valueRu'] }
            ]
        })
        return result
    }

    static postDetailDoctor = async ({ id, contentHTML, contentMarkdown, description, doctorId, priceId, paymentId }) => {
        if (!contentHTML || !contentMarkdown || !description || !doctorId || !priceId || !paymentId) {
            throw new BadRequestError(`Invalid input`)
        }
        const result = await Markdown.create({
            contentHTML, contentMarkdown, description, doctorId
        })
        const _result = await DoctorInfo.create({
            doctorId, paymentId, priceId
        })
        return [result, _result]
    }
    static getDetailDoctorById = async (id) => {
        if (!id)
            throw new BadRequestError(`Invalid input`)
        const result = await User.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['password', 'image']
            },
            include: [
                {
                    model: Markdown,
                    attributes: ['description', 'contentHTML', 'contentMarkdown']
                }, {
                    model: AllCode,
                    as: 'positionData',
                    attributes: ['valueEn', 'valueVi', 'valueRu']
                },
                {
                    model: DoctorInfo,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ]
        })
        return result
    }
    static getScheduleById = async ({ id, date }) => {
        // console.log(moment(date).format('YYYY-MM-DD'))
        // console.log(req.body.id, date)
        // console.log({ id, date }) moment(date).format('YYYY-MM-DD')
        if (!id || !date)
            throw new BadRequestError(`Invalid input`)
        const result = Schedule.findAll({
            where: {
                doctorId: id,
                date: date
            },
            attributes: {
                exclude: ['doctorId', 'createdAt', 'updatedAt']
            },
            include: [
                {
                    model: AllCode,
                    as: 'timeTypeData',
                    attributes: ['valueEn', 'valueVi', 'valueRu']
                }
            ]
        })
        return result
    }
}

module.exports = DoctorService