const User = require('./models/user-model') 
const { UserSchema } = require('../schemas/user-schema')
const MongodbErrorValidatorUtil = require('../utils/mongodb-error-validator-util')
class UserRepository {
    async create(userSchema) {
        try {
            const user = new User(userSchema)
            const response = await user.save()
            const createdUserSchema = new UserSchema()
            createdUserSchema.buildWithDatabase(response)
            return createdUserSchema
        } catch (error) {
            const errorValidator = new MongodbErrorValidatorUtil()
            errorValidator.validate(error)
        }
    }

    async find(filter={}, projection={}) {
        return User.find(filter, projection={})
    }
}

module.exports = UserRepository