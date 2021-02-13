const { ObjectId } = require('mongoose').Types
const ProjectFilterSchema = require('./project-filter-schema')

class TaskFilterSchema extends ProjectFilterSchema {
    constructor(_id, _userId, _taskId) {
        super(_id, _userId)
        this.taskId = new ObjectId(_taskId)
    }
}

module.exports = TaskFilterSchema