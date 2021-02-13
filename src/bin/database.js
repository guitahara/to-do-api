const mongoose = require('mongoose')
mongoose.set('debug', process.env.NODE_ENV === 'prod')

class Database {
    constructor() {
        this._connection = process.env.MONGO_CONNECTION
    }

    connect = async () => {
      try {
        await mongoose.connect(process.env.MONGO_CONNECTION, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          auth: { authdb: 'admin' }
        })
        console.log('\x1b[33m%s\x1b[0m', 'Connected to mongodb')
      } catch (error) {
        console.log('\x1b[33m%s\x1b[0m', 'Mongodb connection error: ', error)
        throw error
      }
    }
}


module.exports = Database