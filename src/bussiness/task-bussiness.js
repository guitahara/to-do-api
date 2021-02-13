const { NOT_FOUND_EXCEPTION } = require('../configs/exceptions/error-messages')
const TaskService = require('../services/task-service')
const NotFoundException = require('../configs/exceptions/not-found-exception')

class TaskBusiness {
    #service = new TaskService()

    create = async (taskSchema, projectFilterSchema) => {
        return this.#service.create(taskSchema, projectFilterSchema)
    }

    update = async (filter, data) => {
        const response = await this.#service.update(filter, data)
        if(!response) throw new NotFoundException()

        return response
    }

    remove = async (filter) => {
        const response = await this.#service.remove(filter)
        if(!response.deletedCount) throw new NotFoundException()

        return response
    }

}

module.exports = TaskBusiness