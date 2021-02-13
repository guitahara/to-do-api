const jwt = require('jsonwebtoken')
const UnauthorizedException = require('../configs/exceptions/unauthorized-exception')

class TokenUtil {
    constructor() {
        this.secret = process.env.JWT_SECRET
    }
    
    generateToken = user => jwt.sign(user, this.secret)
    
    verifyToken = token => {
        try {
            jwt.verify(token, this.secret)
        } catch (error) {
            console.log(error)
            throw new UnauthorizedException()
        }
    }
    
    decodeToken = token => jwt.decode(token)
}

module.exports = TokenUtil
