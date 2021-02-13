const ResponseUtils = require('../utils/response-util')
const SchemaValidatorUtil = require('../utils/schema-validator-util')
const { ProjectSchema, projectJoiSchema } = require('../schemas/project-schema')
const ProjectBusiness = require('../bussiness/project-bussines')

class ProjectController {
    #bussiness = new ProjectBusiness()

    create = async (req,res) => {
        try {
            const { body, user } = req

            const schemaValidator = new SchemaValidatorUtil(projectJoiSchema)
            schemaValidator.validate(body)

            const projectSchema = new ProjectSchema()
            projectSchema.buildWithCreateRequestData({...body, _id: user._id})

            const response = await this.#bussiness.create(projectSchema)

            ResponseUtils.success201CreatedResponse(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }

    update = async (req,res) => {
        try {
            const { body } = req
            ResponseUtils.success200OKResponde(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }

    remove = async (req,res) => {
        try {
            ResponseUtils.success204NoContentResponse(res, response);
        } catch (error) {
            console.log(error)
            ResponseUtils.errorResponse(res, error);
        }
    }
}

module.exports = ProjectController