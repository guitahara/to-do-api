const UserRepository = require('../repositories/user-repository')

class UserService {
    #repository = new UserRepository()

    create = async(userSchema) => {
        return this.#repository.create(userSchema)
    }

    find = async (filter = {}, projection = {}) => {
        return this.#repository.find(filter, projection)
    }
}

module.exports = UserService