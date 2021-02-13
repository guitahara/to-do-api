const User = require('./models/user-model') 
const { UserSchema } = require('../schemas/user-schema')

class UserRepository {
    async create(userSchema) {
        const user = new User(userSchema)
        const response = await user.save()
        const createdUserSchema = new UserSchema()
        createdUserSchema.buildWithDatabase(response)
        return createdUserSchema
    }

    async find(filter={}, projection={}) {
        return User.find(filter, projection={})
    }
}

module.exports = UserRepository