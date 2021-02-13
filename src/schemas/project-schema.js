const Joi = require('joi')

class ProjectSchema {
    constructor() {
        this.userId
        this.name
        this.tasks = []
    }

    buildWithCreateRequestData = (data) => {
        this.name = data.name
        this.userId = data._id
    }
}

const projectJoiSchema = Joi.object().keys({
    name: Joi.string().required()
})

module.exports = {ProjectSchema, projectJoiSchema}