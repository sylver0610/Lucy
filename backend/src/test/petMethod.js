const baseURL = 'http://localhost:3052/v1/api'
const superagent = require('superagent');

const getAllPet = () => {
    return superagent.get(`${baseURL}/user/get-pet`)
}

const getPetWithPaginate = (page = 1, limit = 5) => {
    return superagent.get(`${baseURL}/user/get-pet-paginate?page=${page}&limit=${limit}`)
}

const createPet = (clientId = 24, name = 'Petties', type = 'C') => {
    return superagent.post(`${baseURL}/user/create-pet`).send({ clientId, name, type })
}

module.exports = {
    getAllPet,
    getPetWithPaginate,
    createPet,
}