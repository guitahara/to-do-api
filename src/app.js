const express = require('express')
const Database = require('./bin/database')
const db = new Database()

const app = express()
db.connect()


module.exports = app
