const ResponseUtils = require('../utils/response-utils')

class UserController {
    create(req,res) {
        try {
            const response  = {}
            ResponseUtils.success201CreatedResponse(res, response);
        } catch (error) {
            ResponseUtils.errorResponse(res, error);
        }
    }
}

module.exports = UserController