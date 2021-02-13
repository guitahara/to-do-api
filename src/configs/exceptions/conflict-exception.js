
const ERROR_MESSAGES = require('./error-messages')
const HTTP_STATUS_CODE = require('../../enum/http-status-enum')

class ConflictException extends Error {
    constructor(message) {
        super(ERROR_MESSAGES.CONFLICT_ERROR)
        this.name = 'ConflictException'
        this.statusCode = HTTP_STATUS_CODE.CONFLICT
        this.message = message || ERROR_MESSAGES.CONFLICT_ERROR
    }
}

module.exports = ConflictException;
