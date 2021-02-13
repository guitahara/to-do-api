const ResponseUtils = require('../utils/response-util')
const SchemaValidatorUtil = require('../utils/schema-validator-util')
const { CredentialSchema, credentialJoiSchema } = require('../schemas/credentials-schema')
const AuthBusiness = require('../bussiness/auth-bussiness')

class AuthController {
    #bussiness = new AuthBusiness()

    login = async (req,res) => {
        try {
            const { body } = req
            
            const schemaValidator = new SchemaValidatorUtil(credentialJoiSchema)
            schemaValidator.validate(body)

            const credentialSchema = new CredentialSchema()
            credentialSchema.buildWithLoginRequest(body)

            const response = await this.#bussiness.login(credentialSchema)

            ResponseUtils.success200OKResponde(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }
}

module.exports = AuthController