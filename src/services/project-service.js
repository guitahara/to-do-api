const ProjectRepository = require('../repositories/project-repository')

class ProjectService {
    #repository = new ProjectRepository()

    create = async(userSchema) => {
        return this.#repository.create(userSchema)
    }

    find = async (filter = {}, projection = {}) => {
        return this.#repository.find(filter, projection)
    }

    update = async (filter = {}, data) => {
        return this.#repository.update(filter, data)
    }
}

module.exports = ProjectService