const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    userName: { type: String, index: { unique: true } },
    password: String
})

module.exports = mongoose.model('user', userSchema, 'users')
