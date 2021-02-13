const UnauthorizedException = require('../configs/exceptions/unauthorized-exception')
const TokenUtil = require('../utils/token-utils')
const AuthResponseSchema = require('../schemas/auth-response-schema')

class AuthService {

    validateCredential = async (credentialSchema, user) => {
        const valid = user.comparePassword(credentialSchema.password)
        
        if(valid) {
            const tokenUtil = new TokenUtil()
            const token = tokenUtil.generateToken({
                id: user._id,
                name: user.name,
                userName: user.userName,
            })

            const authResponseSchema = new AuthResponseSchema()
            authResponseSchema.buildWithDatabase({name: user.name, userName: user.userName, token})
            
            return authResponseSchema
        } else {
            throw new UnauthorizedException()
        }
    }

}

module.exports = AuthService