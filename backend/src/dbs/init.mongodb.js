'use strict'

const mongoose = require('mongoose');
const { db: { host, name, port } } = require('../configs/config.mongodb')
const connectString = `mongodb://${host}:${port}/${name}`;
const { countConnect } = require('../helpers/check.connect')


class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {

        //dev
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectString)
            .then(_ => {
                countConnect()
                console.log(`Connected Mongodb Success `)

            })
            .catch(err => console.log(`Error connect!! ${err}`))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        };
        return Database.instance
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;


