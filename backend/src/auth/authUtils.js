'use strict'

const JWT = require('jsonwebtoken')
const { AuthorizationError } = require('../core/error.response');
const jwt_decode = require('jwt-decode');
const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        // accessToken
        // console.log(payload)
        const accessToken = await JWT.sign(payload, publicKey, {

            expiresIn: '2 days'
        })

        const refreshToken = await JWT.sign(payload, privateKey, {

            expiresIn: '7 days'
        })

        //decode

        JWT.verify(accessToken, publicKey, (err, decode) => {
            if (err) {
                console.error(`error verify::`, err)
            } else {
                console.log(`decode verify::`, decode)
            }
        })
        return { accessToken, refreshToken }
    } catch (error) {

    }
}
const verifyAccessToken = (req, res, next) => {
    console.log(`gg`)
    if (!req.headers['authorization']) {
        throw new AuthorizationError(`Not authenticated the user`)
    }
    const authHeader = req.headers['authorization']
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1];
    const verifyToken = jwt_decode(token);
    console.log(`verify `, verifyToken)
    if (!verifyToken) {
        throw new AuthorizationError(`Not authenticated the user`)
    }
    req.payload = verifyToken;
    next()
}
module.exports = {
    createTokenPair,
    verifyAccessToken
}