const jwt = require('jsonwebtoken')

class TokenUtil {
    constructor() {
        this.secret = process.env.JWT_SECRET
    }
    
    generateToken = user => jwt.sign(user, this.secret)
    
    verifyToken = token => jwt.verify(token, this.secret)
    
    decodeToken = token => jwt.decode(token)
}

module.exports = TokenUtil
