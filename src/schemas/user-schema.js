const Joi = require('joi')

class UserSchema {
    constructor(){
        this.name
        this.userName
    }

    buildWithDatabase(data) {
        this.name = data.name
        this.userName = data.userName
    }

    buildWithCreateRequestData(data) {
        this.name = data.name
        this.userName = data.userName
        this.password = data.password
    }
}

const userJoiSchema = Joi.object().keys({
    name: Joi.string().required().min(5).max(20),
    userName: Joi.string().required().min(5).max(10),
    password: Joi.string().required().length(8)
})

module.exports = {
    UserSchema,
    userJoiSchema
}