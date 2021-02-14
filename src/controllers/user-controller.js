const ResponseUtils = require('../utils/response-util')
const SchemaValidatorUtil = require('../utils/schema-validator-util')
const { UserSchema, userJoiSchema } = require('../schemas/user-schema')
const UserBusiness = require('../bussiness/user-bussiness')

class UserController {
    #bussiness = new UserBusiness()

    create = async (req,res) => {
        try {
            const { body } = req
            
            const schemaValidator = new SchemaValidatorUtil(userJoiSchema)
            schemaValidator.validate(body)

            const userSchema = new UserSchema()
            userSchema.buildWithCreateRequestData(body)

            const response = await this.#bussiness.create(userSchema)

            ResponseUtils.success201CreatedResponse(res, response);
        } catch (error) {
            ResponseUtils.errorResponse(res, error);
        }
    }
}

module.exports = UserController