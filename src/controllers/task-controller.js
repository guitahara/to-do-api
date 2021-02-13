const ResponseUtils = require('../utils/response-util')
const SchemaValidatorUtil = require('../utils/schema-validator-util')
const { TaskSchema, taskJoiSchema } = require('../schemas/task-schema')
const TaskBusiness = require('../bussiness/task-bussiness')
const TaskFilterSchema = require('../schemas/task-filter-schema')
const ProjectFilterSchema = require('../schemas/project-filter-schema')

class TaskController {
    #bussiness = new TaskBusiness()

    create = async (req,res) => {
        try {
            const { body, user, params } = req

            const schemaValidator = new SchemaValidatorUtil(taskJoiSchema)
            schemaValidator.validate(body)

            const taskSchema = new TaskSchema()
            taskSchema.buildWithCreateRequestData({
                ...body, 
                projectId: params.projectId,
            })

            const projectFilterSchema = new ProjectFilterSchema(params.projectId, user.id)

            const response = await this.#bussiness.create(taskSchema, projectFilterSchema)

            ResponseUtils.success201CreatedResponse(res, response);
        } catch (error) {
            ResponseUtils.errorResponse(res, error);
        }
    }

    update = async (req,res) => {
        try {
            const { body, params, user } = req

            const schemaValidator = new SchemaValidatorUtil(taskJoiSchema)
            schemaValidator.validate(body)

            const taskFilterSchema = new TaskFilterSchema(params.projectId, user.id, params._id)

            const response = await this.#bussiness.update(taskFilterSchema, body)

            ResponseUtils.success200OKResponde(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }

    remove = async (req,res) => {
        try {
            const { params, user } = req

            const taskFilterSchema = new TaskFilterSchema(params.projectId, user.id, params._id)

            const response = await this.#bussiness.remove(taskFilterSchema)

            ResponseUtils.success204NoContentResponse(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }

}

module.exports = TaskController