const Joi = require('joi')
const { UserSchema } = require('./user-schema')

class CredentialSchema extends UserSchema {

    buildWithLoginRequest(data) {
        this.userName = data.userName
        this.password = data.password
    }

}

const credentialJoiSchema = Joi.object().keys({
    userName: Joi.string().required().min(5).max(10),
    password: Joi.string().required().length(8)
})

module.exports = {
    CredentialSchema,
    credentialJoiSchema
}