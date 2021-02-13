const ConflictException = require('../configs/exceptions/conflict-exception')

class MongodbErrorValidator {
    validate = (error) => {
        switch (error.code) {
            case 11000:
                throw new ConflictException()
            default:
                break;
        }
    }
}

module.exports = MongodbErrorValidator