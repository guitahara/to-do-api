const ProjectController = require('../controllers/project-controller')
const projectController = new ProjectController()

module.exports = (app) => {
    app.route('/v1/projects').post(projectController.create)
    app.route('/v1/projects').get(projectController.find)
    app.route('/v1/projects/:_id').patch(projectController.update)
    app.route('/v1/projects/:_id').delete(projectController.remove)
}
