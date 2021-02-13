const NotFoundException = require('../configs/exceptions/not-found-exception')
const ProjectRepository = require('../repositories/project-repository')
const { ProjectSchema } = require('../schemas/project-schema')

class TaskService {
    #repository = new ProjectRepository()

    create = async(taskSchema, projectFilterSchema) => {
        const projects = await this.#repository.find(projectFilterSchema)
        if(!projects.length) throw new NotFoundException()

        const project = projects[0]
    
        console.log(taskSchema)

        project.tasks.push(taskSchema)

        return this.#repository.update(projectFilterSchema,{tasks: project.tasks})
    }

    find = async (filter = {}, projection = {}) => {
        return this.#repository.find(filter, projection)
    }

    update = async (filter = {}, data) => {
        return this.#repository.update(filter, data)
    }

    remove = async (filter = {}) => {
        return this.#repository.remove(filter)
    }
}

module.exports = TaskService