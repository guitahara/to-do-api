const express = require('express')
const Database = require('./bin/database')
const db = new Database()
const routes = require('./routes/index')

const app = express()
db.connect()
routes(app)


module.exports = app
