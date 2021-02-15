const Joi = require('joi')

class TaskSchema {
    constructor() {
        this.projectId
        this.description
        this.creationDate
        this.finishDate = null
        this.done = false
    }

    buildWithCreateRequestData = (data) => {
        this.projectId = data.projectId
        this.description = data.description
        this.creationDate = new Date()
    }

    buildWithDatabase = (data) => {
        this.projectId = data.projectId
        this.description = data.description
        this.creationDate = data.creationDate
        this.finishDate = data.finishDate
        this.done = data.done
    }
}

const taskJoiSchema = Joi.object().keys({
    description: Joi.string().required(),
    projectId: Joi.string()
})

module.exports = { TaskSchema, taskJoiSchema }