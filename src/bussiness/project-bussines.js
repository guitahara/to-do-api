const ProjectService = require('../services/project-service')

class ProjectBusiness {
    #service = new ProjectService()

    create = async (projectSchema) => {
        return this.#service.create(projectSchema)
    }
}

module.exports = ProjectBusiness