const User = require('./models/user-model') 

class UserRepository {
    async create(userSchema) {
        const user = new User(userSchema)
        return user.save()
    }

    async find(filter={}, projection={}) {
        return User.find(filter, projection={})
    }
}

module.exports = UserRepository