const userRoute = require('./user-route')
const authRoute = require('./auth-route')

module.exports = (app) => {
    userRoute(app)
    authRoute(app)

    return app
}