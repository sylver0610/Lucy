'use strict'

// level 0

// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: '127.0.0.1',
//         port: 27017,
//         name: 'shopDEV'
//     }
// }

// level 1

const dev = {
    app: {
        port: 3000
    },
    db: {
        host: '127.0.0.1',
        port: 27017,
        name: 'shopDEV'
    }
}

const production = {
    app: {
        port: 3000
    },
    db: {
        host: '127.0.0.1',
        port: 27017,
        name: 'shopDEV_production'
    }
}

const config = { dev, production }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]