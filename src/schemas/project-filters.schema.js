const { ObjectId } = require('mongoose').Types

class ProjectFilterSchema {
    constructor(_id, _userId) {
        this._id = new ObjectId(_id)
        this.userId = new ObjectId(_userId)
    }
}

module.exports = ProjectFilterSchema