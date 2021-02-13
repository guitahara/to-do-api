const Project = require('./models/project-model')
const { ObjectId } = require('mongoose').Types

class ProjectRepository {
    
    create = async (data) => {
        const project = new Project(data)
        return project.save()
    }
    
    find = async (filter = {}, projection = {}) => {
        return Project.find(filter, projection)
    }
    
    update = async (data) => {
        const project = new Project(data)
        project.isNew = false
        return project.save()
    }
    
    remove = async (_id, userId) => {
        return Project.deleteOne({ _id: new ObjectId(_id), userId: new ObjectId(userId) })
    }
}

module.exports = ProjectRepository