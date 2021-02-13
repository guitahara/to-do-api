const ResponseUtils = require('../utils/response-util')
const SchemaValidatorUtil = require('../utils/schema-validator-util')
const { ProjectSchema, projectJoiSchema } = require('../schemas/project-schema')
const ProjectBusiness = require('../bussiness/project-bussines')
const ProjectFilterSchema = require('../schemas/project-filters.schema')

class ProjectController {
    #bussiness = new ProjectBusiness()

    create = async (req,res) => {
        try {
            const { body, user } = req

            const schemaValidator = new SchemaValidatorUtil(projectJoiSchema)
            schemaValidator.validate(body)

            const projectSchema = new ProjectSchema()
            projectSchema.buildWithCreateRequestData({...body, userId: user.id})

            const response = await this.#bussiness.create(projectSchema)

            ResponseUtils.success201CreatedResponse(res, response);
        } catch (error) {
            ResponseUtils.errorResponse(res, error);
        }
    }

    update = async (req,res) => {
        try {
            const { body, params, user } = req

            const schemaValidator = new SchemaValidatorUtil(projectJoiSchema)
            schemaValidator.validate(body)

            const filter = new ProjectFilterSchema(params._id, user.id)

            const response = await this.#bussiness.update(filter, body)

            ResponseUtils.success200OKResponde(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }

    remove = async (req,res) => {
        try {
            const { params, user } = req

            const filter = new ProjectFilterSchema(params._id, user.id)

            const response = await this.#bussiness.remove(filter)

            ResponseUtils.success204NoContentResponse(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }

    find = async (req,res) => {
        try {
            const { user } = req

            const response = await this.#bussiness.find(user.id)

            ResponseUtils.success200OKResponde(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }
}

module.exports = ProjectController