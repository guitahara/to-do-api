class SchemaValidatorUtil {
    constructor(_schema) {
        this.schema = _schema
    }

    validate(data) {
        return this.schema.validate(data)
    }
}

module.exports = SchemaValidatorUtil