const userRoute = require('./user-route')

module.exports = (app) => {
    userRoute(app)

    return app
}