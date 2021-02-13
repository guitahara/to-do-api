const UserService = require('../services/user-service')

class UserBusiness {
    #service = new UserService()

    create = async (userSchema) => {
        return this.#service.create(userSchema)
    }
}

module.exports = UserBusiness