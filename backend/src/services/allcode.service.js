const { NotFoundError } = require('../core/error.response');
const _ = require('lodash')
const db = require('../models/index');
const Codes = db.AllCode
class AllCode {
    static getAllCode = async (type) => {
        const result = await Codes.findAll({
            where: {
                type: type
            }
        })
        if (_.isEmpty(result))
            throw new NotFoundError(`Not found data`)
        return result
    }

    static getRangeTime = async () => {
        const result = await Codes.findAll({
            where: {
                type: 'TIME'
            }
        })
        if (_.isEmpty(result))
            throw new NotFoundError(`Not found data`)
        return result
    }
}

module.exports = AllCode
