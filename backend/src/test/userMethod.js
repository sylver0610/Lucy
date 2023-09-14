const baseURL = 'http://localhost:3052/v1/api'
const superagent = require('superagent');

const getAllUser = () => {
    return superagent.get(`${baseURL}/user/all`)
}

const getUserWithPaginate = (page = 1, limit = 5) => {
    return superagent.get(`${baseURL}/user/?page=${page}&limit=${limit}`)
}

const updateUser = (email = 'sylver0610@gmail.com', firstName = 'La', lastName = 'Dien', roleId = 'R1', address = 'Russia') => {
    return superagent.put(`${baseURL}/user`).send({ email, firstName, lastName, roleId, address })
}

const deleteUser = (id = 34) => {
    return superagent.delete(`${baseURL}/?id=${id}`)
}

module.exports = {
    getAllUser,
    getUserWithPaginate,
    updateUser,
    deleteUser
}