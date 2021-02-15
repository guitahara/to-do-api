const NotFoundException = require('../configs/exceptions/not-found-exception')
const ProjectRepository = require('../repositories/project-repository')

class TaskService {
    #repository = new ProjectRepository()

    create = async (taskSchema, projectFilterSchema) => {
        const projects = await this.#repository.find(projectFilterSchema)
        if (!projects.length) throw new NotFoundException()

        const project = projects[0]

        project.tasks.push(taskSchema)

        return this.#repository.update(projectFilterSchema, { tasks: project.tasks })
    }

    find = async (filter = {}, projection = {}) => {
        return this.#repository.find(filter, projection)
    }

    update = async (taskFilter, data) => {
        const projects = await this.#repository.find(taskFilter)
        if (!projects.length) throw new NotFoundException()

        const project = projects[0]

        project.tasks = project.tasks.map(task => {
            const taskId = task._id.toString()
            const updateTaskId = taskFilter['tasks._id'].toString()
            if (taskId === updateTaskId) {
                if (task.done === true) throw new NotFoundException()
                for (let field in data) {
                    task[field] = data[field]
                }
            }
            return task
        })

        return this.#repository.update(taskFilter, { tasks: project.tasks })
    }

    remove = async (taskFilter) => {
        const projects = await this.#repository.find(taskFilter)
        if (!projects.length) throw new NotFoundException()

        const project = projects[0]

        project.tasks = project.tasks.filter(task => {
            const taskId = task._id.toString()
            const updateTaskId = taskFilter['tasks._id'].toString()
            if (taskId === updateTaskId) {
                if (task.done === true) throw new NotFoundException()
                return false
            }
            return true
        })

        return this.#repository.update(taskFilter, { tasks: project.tasks })
    }
}

module.exports = TaskService