`use strict`

const db = require("../models/index")
class KeyTokenService {

    static createKeyToken = async ({ userId, publicKey, privateKey }) => {
        try {
            // console.log(`Insert here: ${userId} - ${publicKey} - ${privateKey}`)
            const tokens = await db.KeyToken.create({
                userId: userId,
                public_key: publicKey,
                private_key: privateKey
            })

            return tokens ? tokens.public_key : null
        } catch (error) {
            return error
        }
    }

    // static findKeyBy
}

module.exports = KeyTokenService;