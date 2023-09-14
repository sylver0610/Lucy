import { doLogInSuccess, getProcessFailed, getProcessSuccess, isLoading, isNotLoading } from "../redux/slice/userSlice";
import axios from "../utils/axiosCustomize"
import { toast } from 'react-toastify';


/* ---------------------AUTH-------------------------------- */
const registerUser = async (roleId, email, password) => {
    // console.log(`regis`)
    return await axios.post(`v1/api/register`, { email, password, roleId }); //form-urlencoded
}

const postLogin = async (email, password, dispatch, navigate) => {
    dispatch(getProcessSuccess())
    dispatch(isLoading());
    axios.post(`v1/api/login`, { email, password })
        .then(response => {
            console.log('res ', response)
            dispatch(doLogInSuccess(response.data.metadata));
            dispatch(isNotLoading());

            navigate('/account')
        })
        .catch(err => {
            toast.error(err.response.data.message);
            console.log('err ', err)
            dispatch(isNotLoading());
            dispatch(getProcessFailed());

        })

}

/* ------------------------USER--------------------------------- */

const getAllUser = async () => {
    return await axios.get(`v1/api/user/all`)
        .then(response => {
            // console.log(`success`)
            // console.log(response)
            return response.data.metadata
        })
        .catch(err => {
            // console.log(`fail`)
            toast.error(err.response.data.message);
        })
    // console.log(response)
    // return response.data
}

const getUserWithPaginate = async (page, limit) => {
    return axios.get(`v1/api/user/?page=${page}&limit=${limit}`)
        .then(response => { return response.data.metadata })
        .catch(err => {
            toast.error(err.response.data.message);
        })
}

const postCreateUser = async ({ email, password, roleId, firstName, lastName, gender, positionId, image, address, phoneNumber }) => {
    // console.log({ email, password, roleId, firstName, lastName, gender, positionId, image, address, phoneNumber })
    return axios.post(`v1/api/user/`, { email, password, roleId, firstName, lastName, gender, positionId, image, address, phoneNumber })
        .then(response => {
            console.log(`res from create user `, response)
            return response.data
        })
        .catch(err => {
            console.log(`err from create user`, err)
            toast.error(err.response.data.message);
        })
}

const deleteUser = async (id) => {
    console.log(id, `from api front`)
    return axios.delete(`v1/api/user/?id=${id}`)
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
            toast.error(err.response.data.message);
        })
}

const putUpdateUser = async ({ email, password, roleId, firstName, lastName, gender, positionId, image, address, phoneNumber }) => {
    return axios.put(`v1/api/user/`, { email, password, roleId, firstName, lastName, gender, positionId, image, address, phoneNumber })
        .then(response => {
            return response.data
        })
        .catch(err => {
            toast.error(err.response.data.message);
        })
}


/* ------------------------DOCTOR--------------------------------- */

const getDoctorLimit = async ({ limit = "max" }) => {
    return await axios.get(`v1/api/doctor?limit=${limit}`)
        .then(response => {
            return response.data.metadata
        })
        .catch(err => {
            toast.error(err.response.data.message);
        })
}

const postCreateSchedules = async ({ date, doctorId, time }) => {
    return await axios.post(`v1/api/schedule`, { date, doctorId, time })
        .then(response => {
            return response.data.message
        })
        .catch(err => {
            toast.error(err.response.data.message);
        })
}

const postDetailDoctor = async ({ contentHTML, contentMarkdown, description, doctorId, priceId, paymentId, hasOldData }) => {
    if (!hasOldData)
        return await axios.post(`v1/api/doctor`, { contentHTML, contentMarkdown, description, doctorId, paymentId, priceId })
            .then(response => {
                return response.data.message
            })
            .catch(err => {
                toast.error(err.response.data.message);
            })
    else

        console.log(`gg hehe`)
}

const getDetailDoctorById = async (id) => {
    return await axios.get(`v1/api/doctor/detail-doctor-by-id?id=${id}`)
        .then(response => {
            // console.log(`from test:`, id, date)
            return response.data.metadata
        })
        .catch(err => {
            // console.log(`from test:`, id, date)
            toast.error(err.response.data.message);
        })
}

const getScheduleById = async ({ id, date }) => {
    // console.log({ id, date })
    return await axios.get(`v1/api/doctor/get-schedule-of-doctor-by-id?id=${id}&date=${date}`)
        .then(response => {
            // console.log(`from test:`, id, date)
            return response.data.metadata
        })
        .catch(err => {
            // console.log(`from test:`, id, date)
            toast.error(err.response.data.message);
        })
}


/* ------------------------CODE--------------------------------- */
const getAllCode = async (type) => {
    return await axios.get(`v1/api/allcode?type=${type}`)
        .then(response => {
            // console.log(`success`)
            // console.log(response)
            return response.data.metadata
        })
        .catch(err => {
            // console.log(`fail`)
            toast.error(err.response.data.message);
        })
}

/* ------------------------PET--------------------------------- */

const postCreatePet = async ({ clientId, name, type }) => {

    return axios.post(`v1/api/user/create-pet`, { clientId, name, type })
        .then(response => {
            // console.log(`res from create user `, response)
            toast.success(response.data.message)
            // return response.data.
        })
        .catch(err => {
            // console.log(`err from create user`, err)
            toast.error(err.response.data.message);
        })
}

const getAllPet = async (type) => {
    return await axios.get(`v1/api/user/get-pet`)
        .then(response => {
            // console.log(`success`)
            // console.log(response)
            return response.data.metadata
        })
        .catch(err => {
            // console.log(`fail`)
            toast.error(err.response.data.message);
        })
}

const getPetWithPaginate = async (page, limit) => {
    return axios.get(`v1/api/user/get-pet-paginate?page=${page}&limit=${limit}`)
        .then(response => { return response.data.metadata })
        .catch(err => {
            toast.error(err.response.data.message);
        })
}


export {
    postLogin,
    registerUser,
    getAllUser,
    getUserWithPaginate,
    postCreateUser,
    deleteUser,
    putUpdateUser,
    getDoctorLimit,
    getAllCode,
    postCreateSchedules,
    postDetailDoctor,
    getScheduleById,
    getDetailDoctorById,
    getAllPet,
    getPetWithPaginate,
    postCreatePet
}