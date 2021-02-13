const UserService = require('../services/user-service')

class UserBusiness {
    #service = new UserService()

    login = async (loginSchema) => {
        return this.#service.create(userSchema)
    }
}

module.exports = UserBusiness