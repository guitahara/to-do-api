const express = require('express')
const Database = require('./bin/database')
const db = new Database()
const routes = require('./routes/index')
const middlewares = require('./middlewares/index')

const app = express()
db.connect()
middlewares(app)
routes(app)

module.exports = app
