const BadRequestException = require("../configs/exceptions/bad-request-exception")

class SchemaValidatorUtil {
    constructor(_schema) {
        this.schema = _schema
    }

    validate(data) {
        const result = this.schema.validate(data)
        if (result.error) throw new BadRequestException(result.error.message)
    }
}

module.exports = SchemaValidatorUtil