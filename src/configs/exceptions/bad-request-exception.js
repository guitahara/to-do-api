
const ERROR_MESSAGES = require('./error-messages')
const HTTP_STATUS_CODE = require('../../enum/http-status-enum')

class BadRequestException extends Error {
    constructor(message) {
        super(ERROR_MESSAGES.BAD_REQUEST)
        this.name = 'ConflictException'
        this.statusCode = HTTP_STATUS_CODE.BAD_REQUEST
        this.message = message || ERROR_MESSAGES.BAD_REQUEST
    }
}

module.exports = BadRequestException;
