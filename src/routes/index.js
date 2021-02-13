const userRoute = require('./user-route')
const authRoute = require('./auth-route')
const projectRoute = require('./project-route')
const taskRoute = require('./task-route')

module.exports = (app) => {
    userRoute(app)
    authRoute(app)
    projectRoute(app)
    taskRoute(app)

    return app
}