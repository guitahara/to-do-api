
const ERROR_MESSAGES = require('./error-messages')
const HTTP_STATUS_CODE = require('../../enum/http-status-enum')

class NotFoundException extends Error {
    constructor(message) {
        super(ERROR_MESSAGES.NOT_FOUND_EXCEPTION)
        this.name = 'NotFoundException'
        this.statusCode = HTTP_STATUS_CODE.NOT_FOUND
        this.message = message || ERROR_MESSAGES.NOT_FOUND_EXCEPTION
    }
}

module.exports = NotFoundException;
