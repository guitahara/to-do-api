const UserController = require('../controllers/user-controller')
const userController = new UserController()

module.exports = (app) => {
    app.route('/v1/users').post(userController.create)
}
