const UserRepository = require('../repositories/user-repository')

class UserService {
    #repository = new UserRepository()

    create = async(userSchema) => {
        return this.#repository.create(userSchema)
    }
}

module.exports = UserService