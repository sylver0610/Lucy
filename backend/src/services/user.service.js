const { Model } = require('sequelize');
const db = require('../models/index');
const { getTime, getInfoData } = require('../utils');
const { Op } = require("sequelize")
const JWT = require('jsonwebtoken');
const { NotFoundError, ExistError, ConflictRequestError } = require('../core/error.response');
const _ = require('lodash')
const bcrypt = require('bcrypt');
const crypto = require('node:crypto');
const KeyTokenService = require('./keyToken.service');
const User = db.User;
const KeyToken = db.KeyToken;
class UserService {

    static findUserById = async (id) => {
        return await User.findOne({
            where: {
                id: id,
            }
        });
    }

    static findUserByEmail = async (email) => {
        return await User.findOne({
            where: {
                email: email,
            }
        });
    }

    static findUserByUsername = async (username) => {
        return await User.findOne({
            where: {
                username: username,
            },
            paranoid: false
        });
    }

    static getKeyTokenByUserId = async (id) => {
        return await KeyToken.findOne({
            where: {
                userId: id
            }
        });
    }

    static putUpdateUser = async ({ email, firstName = null, lastName = null, roleId = null, address = null, phoneNumber = null, positionId = null, image = null, gender = false }) => {
        // console.log(`herre`)
        const data = await User.update({
            firstName: firstName,
            lastName: lastName,
            roleId: roleId,
            address: address,
            phoneNumber: phoneNumber,
            positionId: positionId,
            image: image,
            gender: gender,
        }, {
            where: {
                email: email
            }
        });
        if (+data[0] === 0) {
            throw new NotFoundError(`Not found user with the email: ${email}`)
        }
        return data
    }

    static updateRefreshToken = async (refreshToken, userId) => {
        // console.log(refreshToken, ' :: ', userId)
        // console.log(`r`)
        const privateKey = await KeyToken.findOne({
            where: {
                userId: userId
            }
        })
        const decode = JWT.verify(refreshToken, privateKey.private_key, (err, decode) => {
            if (err) {
                console.error(`error verify::`, err)
                return null
            } else {
                console.log(`decode verify::`, decode)
                return decode
            }
        })
        if (!decode) {
            return null
        }
        // console.log(`pK: ${privateKey}`)
        // return privateKey ? privateKey : null
        // const date = new Date(0);
        // return 
        return await User.update({
            refresh_token: refreshToken,
            refresh_expired: new Date(decode.exp * 1000)
        }, {
            where: {
                id: userId
            }
        });
    }

    static deleteRefreshToken = async (userId) => {
        return await db.Participant.update({
            refresh_token: null,
            refresh_expired: null
        }, {
            where: {
                id: userId
            }
        });
    }

    static postCreateUser = async ({ email, password, roleId = 'R3', firstName, lastName, gender, positionId = null, image = null, address = null, phoneNumber = null }) => {
        //check exist email 
        const holderEmail = await this.findUserByEmail(email);
        if (holderEmail) {
            throw new ExistError(`User with the email ${email} already exists`)
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            email, password: passwordHash, roleId, firstName, lastName, gender, positionId, image, address, phoneNumber
        })

        if (newUser) {
            // created privateKey, publicKey
            const privateKey = crypto.randomBytes(64).toString('hex')
            const publicKey = crypto.randomBytes(64).toString('hex')

            const keyStore = await KeyTokenService.createKeyToken({
                userId: newUser.id,
                publicKey,
                privateKey
            })

            if (!keyStore) {
                throw new ConflictRequestError(`publicKeyString error`)
            }

        }
        return {
            user: getInfoData({ fields: ['email', 'roleId'], object: newUser })

        }
    }

    static deleteUser = async (id) => {
        // console.log(id)
        return await User.destroy({
            where: {
                id: id
            }
        })
    }

    static getAllUser = async () => {
        return await User.findAndCountAll()
    }

    static getUserWithPaginate = async (page, limit) => {
        const maxLimit = await User.count()
        console.log(`maxlimit ${maxLimit}`)
        const data = await User.findAndCountAll({
            offset: (page - 1) * limit,
            limit: limit > maxLimit ? maxLimit : limit,
            order: [['createdAt', 'ASC']]
        })
        const users = []
        for (let i = 0; i < data.rows.length; i++) {
            if (!_.isNull(data.rows[i].dataValues.image)) {
                data.rows[i].dataValues.image = data.rows[i].dataValues.image.toString('base64')
            }
            users.push(data.rows[i].dataValues)
        }
        return {
            "totalRows": data.count,
            "totalPages": Math.ceil(data.count / limit),
            "users": users
        }
    }



    /**
     * static getListUserWithPaginate = async (page, limit) => {
        const result = await UserService.getUserWithPaginate(page, limit)
        console.log(result)
        const users = []
        for (let i = 0; i < result.rows.length; i++) {
            if (!_.isNull(result.rows[i].dataValues.image)) {
                result.rows[i].dataValues.image = result.rows[i].dataValues.image.toString('base64')
            }
            users.push(result.rows[i].dataValues)
        }
        return {
            "totalRows": result.count,
            "totalPages": Math.ceil(result.count / limit),
            "users": users
        }
    }
     */

}
module.exports = UserService;