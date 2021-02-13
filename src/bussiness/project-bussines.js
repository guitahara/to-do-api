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
        if(!response) throw new NotFoundException()

        return response
    }
}

module.exports = ProjectBusiness