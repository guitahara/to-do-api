const AuthController = require('../controllers/auth-controller')
const authController = new AuthController()

module.exports = (app) => {
    app.route('/v1/auth/token').post(authController.login)
}
