`use strict`

// const StatusCode = {
//     FORBIDDEN: -1,
//     CONFLICT: -1,
//     NOTFOUND: -2,
//     EXISTED: -1,
//     UNAUTHORIZED: -1
// }

const StatusCode = {
    FORBIDDEN: 400,
    CONFLICT: 409,
    NOTFOUND: 404,
    EXISTED: 303,
    UNAUTHORIZED: 401
}

const ReasonStatuscode = {
    FORBIDDEN: 'Bad Request',
    CONFLICT: 'Conflict Error',
    NOTFOUND: 'Notfound Error',
    EXISTED: 'Data existed',
    UNAUTHORIZED: 'Not authenticated'
}

class ErrorResponse extends Error {

    constructor(message, status) {
        super(message)
        this.status = status
    }

}

class ExistError extends ErrorResponse {

    constructor(message = ReasonStatuscode.EXISTED, status = StatusCode.EXISTED) {
        super(message, status)
        // console.log(`EC: ${EC}`)
    }
}


class NotFoundError extends ErrorResponse {

    constructor(message = ReasonStatuscode.NOTFOUND, status = StatusCode.NOTFOUND) {
        super(message, status)
        // console.log(`EC: ${EC}`)
    }
}

class ConflictRequestError extends ErrorResponse {

    constructor(message = ReasonStatuscode.CONFLICT, status = StatusCode.CONFLICT) {
        super(message, status)
    }
}

class BadRequestError extends ErrorResponse {

    constructor(message = ReasonStatuscode.FORBIDDEN, status = StatusCode.FORBIDDEN) {
        super(message, status)
    }
}

class AuthorizationError extends ErrorResponse {

    constructor(message = ReasonStatuscode.UNAUTHORIZED, status = StatusCode.UNAUTHORIZED) {
        super(message, status)
    }
}

module.exports = {
    ConflictRequestError,
    BadRequestError,
    NotFoundError,
    ExistError,
    AuthorizationError
}