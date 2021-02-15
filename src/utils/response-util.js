const HTTP_STATUS = require('../enum/http-status-enum')
const ERROR_MESSAGES = require('../configs/exceptions/error-messages')
const ErrorSchema = require('../schemas/error-schema')
const headers = { 'Access-Control-Allow-Origin': '*' }

class ResponseUtils {
    static success200OKResponde(res, data) {
        return res.status(HTTP_STATUS.OK)
            .set(headers)
            .json(data)
    }

    static success201CreatedResponse(res, data) {
        return res.status(HTTP_STATUS.CREATED)
            .set(headers)
            .json(data)
    }

    static success204NoContentResponse(res) {
        return res.status(HTTP_STATUS.NO_CONTENT).set(headers).send({})
    }

    static errorResponse(res, err) {
        let body

        if (!err.statusCode) {
            return this.error500Response(res, err)
        }

        if (err.message) {
            body = new ErrorSchema(err.message, err.errorCode)
        }

        return res.status(err.statusCode).set(headers).json(body)
    }

    static error500Response(res, err) {
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).set(headers).send({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR })
    }
}

module.exports = ResponseUtils