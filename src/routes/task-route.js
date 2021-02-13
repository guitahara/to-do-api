const TaskController = require('../controllers/task-controller')
const taskController = new TaskController()

module.exports = (app) => {
    app.route('/v1/projects/:projectId/tasks').post(taskController.create)
    app.route('/v1/projects/:projectId/tasks/:id').patch(taskController.update)
    app.route('/v1/projects/:projectId/tasks/:id').delete(taskController.remove)
}
