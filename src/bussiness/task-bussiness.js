const { NOT_FOUND_EXCEPTION } = require('../configs/exceptions/error-messages')
const TaskService = require('../services/task-service')
const NotFoundException = require('../configs/exceptions/not-found-exception')

class TaskBusiness {
    #service = new TaskService()

    create = async (taskSchema, projectFilterSchema) => {
        return this.#service.create(taskSchema, projectFilterSchema)
    }

    update = async (taskFilter, data) => {
        if(data.done) data.finishDate = new Date()
        const response = await this.#service.update(taskFilter, data)
        if(!response) throw new NotFoundException()

        return response
    }

    remove = async (taskFilter) => {
        const response = await this.#service.remove(taskFilter)

        return response
    }

}

module.exports = TaskBusiness