const Project = require('./models/project-model')

class ProjectRepository {

    create = async (data) => {
        const project = new Project(data)
        return project.save()
    }

    find = async (filter = {}, projection = {}) => {
        return Project.find(filter, projection)
    }

    update = async (filter, data) => {
        return Project.findOneAndUpdate(filter, data)
    }

    remove = async (filter) => {
        return Project.deleteOne(filter)
    }
}

module.exports = ProjectRepository