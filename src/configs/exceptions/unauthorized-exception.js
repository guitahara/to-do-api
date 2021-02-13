
const ERROR_MESSAGES = require('./error-messages')
const HTTP_STATUS_CODE = require('../../enum/http-status-enum')

class UnauthorizedException extends Error {
    constructor(message) {
        super(ERROR_MESSAGES.UNAUTHORIZED_ERROR)
        this.name = 'UnauthorizedException'
        this.statusCode = HTTP_STATUS_CODE.UNAUTHORIZED
        this.message = message || ERROR_MESSAGES.UNAUTHORIZED_ERROR
    }
}

module.exports = UnauthorizedException;
