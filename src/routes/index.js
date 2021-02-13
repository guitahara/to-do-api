const userRoute = require('./user-route')
const authRoute = require('./auth-route')
const projectRoute = require('./project-route')

module.exports = (app) => {
    userRoute(app)
    authRoute(app)
    projectRoute(app)

    return app
}