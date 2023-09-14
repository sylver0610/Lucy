`use strict`

const asyncHandler = fn => {
    return (req, res, next) => {
        // console.log(`hd `, req.body)
        fn(req, res, next).catch(next)
    }
}

module.exports = {
    asyncHandler
}