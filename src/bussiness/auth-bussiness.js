const UserService = require('../services/user-service')
const AuthService = require('../services/auth-service')
const NotFoundException = require('../configs/exceptions/not-found-exception')
const UserModel = require('../repositories/models/user-model')

class UserBusiness {
    #service = new AuthService()

    #userService = new UserService()

    login = async (credentialSchema) => {
        const users = await this.#userService.find({ userName: credentialSchema.userName })
        if (!users.length) throw new NotFoundException()

        const user = new UserModel(users[0])

        return this.#service.validateCredential(credentialSchema, user)
    }
}

module.exports = UserBusiness