
`use strict`

const shopModel = require("../models/shop.model")
const bcrypt = require('bcrypt')
const crypto = require('node:crypto')
const KeyTokenService = require("./keyToken.service")
const { createTokenPair } = require("../auth/auth.utils")
const { getInfoData } = require("../utils")
const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            //step1: check exist email

            const holderShop = await shopModel.findOne({ email }).lean()

            if (holderShop) {
                return {
                    code: 'xxxx',
                    message: 'Shop already registered'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)
            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles: [RoleShop.SHOP]
            })

            if (newShop) {
                // created privateKey, publicKey
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    publicKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    },
                    privateKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    }
                });

                // const privateKey = crypto.getRandomValues(64).tostring('hex')
                // const publicKey = crypto.getRandomValues(64).tostring('hex')

                console.log({ privateKey, publicKey }) //save collection KeyStore

                const publicKeyString = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    publicKey
                })

                if (!publicKeyString) {
                    return {
                        code: 'xxxx',
                        message: 'publicKeyString error'
                    }
                }

                const publicKeyObject = crypto.createPublicKey(publicKeyString)

                //created token pair
                const tokens = await createTokenPair({ userId: newShop._id, email }, publicKeyString, privateKey);

                console.log(`Created tokens success:: `, tokens)

                return {
                    code: 201,
                    metadata: {
                        shop: getInfoData({ fields: ['_id', 'name', 'email'], object: newShop }),
                        tokens
                    }
                }
            }

            return {
                code: 201,
                metadata: null
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService