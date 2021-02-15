const { NOT_FOUND_EXCEPTION } = require('../configs/exceptions/error-messages')
const ProjectService = require('../services/project-service')
const NotFoundException = require('../configs/exceptions/not-found-exception')

class ProjectBusiness {
    #service = new ProjectService()

    create = async (projectSchema) => {
        return this.#service.create(projectSchema)
    }

    update = async (filter, data) => {
        const response = await this.#service.update(filter, data)
        if (!response) throw new NotFoundException()

        return response
    }

    remove = async (filter) => {
        const response = await this.#service.remove(filter)
        if (!response.deletedCount) throw new NotFoundException()

        return response
    }

    find = async (userId) => {
        return this.#service.find({ userId })
    }
}

module.exports = ProjectBusiness