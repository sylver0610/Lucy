const { NotFoundError, BadRequestError, ExistError } = require('../core/error.response');
const _ = require('lodash')
const db = require('../models/index');
const Pet = db.Pet
const User = db.User
class PetService {
    static findPetByClientId = async (id) => {
        return await Pet.findOne({
            where: {
                clientId: id,
            }
        });
    }
    static postCreatePet = async ({ clientId, name, type }) => {
        if (!clientId || !name || !type) {
            throw new BadRequestError
        }
        const holderPet = await Pet.findOne({
            where: {
                clientId, name, type
            }
        });
        if (holderPet) {
            throw new ExistError(`${type} with ${name} existed`)
        }
        const newPet = await Pet.create({ clientId, name, type })
        return newPet
    }

    static getAllPet = async () => {
        const listPet = await Pet.findAll({

            attributes: {
                exclude: ['updatedAt', 'createdAt']
            },
            include: [
                {
                    model: User,
                    as: 'clientData',
                    attributes: ['firstName', 'lastName', 'phoneNumber', 'gender', 'email'],
                }
            ]
        })
        return listPet
    }

    static getPetWithPaginate = async (page, limit) => {
        const maxLimit = await Pet.count()
        console.log(`maxlimit ${maxLimit}`)
        const data = await Pet.findAndCountAll({
            offset: (page - 1) * limit,
            limit: limit > maxLimit ? maxLimit : limit,
            order: [['createdAt', 'ASC']],
            include: [
                {
                    model: User,
                    as: 'clientData',
                    attributes: ['firstName', 'lastName', 'phoneNumber', 'gender', 'email'],
                }
            ]
        })
        const pets = []
        for (let i = 0; i < data.rows.length; i++) {
            pets.push(data.rows[i].dataValues)
        }
        return {
            "totalRows": data.count,
            "totalPages": Math.ceil(data.count / limit),
            "pets": pets
        }
    }
}

module.exports = PetService