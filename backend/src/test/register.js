const superagent = require('superagent');
const { v4: uuidv4 } = require('uuid');
const baseURL = 'http://localhost:3052/v1/api'

let countUserRegis = uuidv4()

const DATA_TEST_EMAIL = `user${countUserRegis}@gmail.com`

const DATA_TEST_PASSWORD = '123456'

const signUpSuccess = (email = DATA_TEST_EMAIL, password = DATA_TEST_PASSWORD) => {
    // console.log({ DATA_TEST_EMAIL, DATA_TEST_PASSWORD })
    return superagent.post(`${baseURL}/register`)
        .send({
            email: email,
            password: password
        })
}

const signUpFail = () => {
    // countUserRegis++
    return superagent.post(`${baseURL}/register`)
        .send({
            password: DATA_TEST_PASSWORD
        })
}

module.exports = {
    signUpSuccess,
    signUpFail
}