const { UserSchema } = require("./user-schema");

class AuthResponseSchema extends UserSchema {
    constructor() {
        super()
        this.token
    }

    buildWithDatabase(data) {
        this.name = data.name
        this.userName = data.userName
        this.token = data.token
    }
}

module.exports = AuthResponseSchema