const superagent = require('superagent');

const baseURL = 'http://localhost:3052/v1/api'
const DATA_TEST_EMAIL = 'admin@gmail.com'
const DATA_TEST_PASSWORD = '123456'

const signIn = (email = DATA_TEST_EMAIL, password = DATA_TEST_PASSWORD) => {
    return superagent.post(`${baseURL}/login`)
        .send({
            email: email,
            password: password
        })
}

const signInFail = () => {
    return superagent.post(`${baseURL}/login`)
        .send({
            email: 'admin@gmail.com',
            password: '1234567'
        })
}

module.exports = {
    signIn,
    signInFail
}