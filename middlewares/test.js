const middlewareAuthTest = (req, res, next) => {
    // check the token
    console.log('middleware')
    next()
}

module.exports = middlewareAuthTest