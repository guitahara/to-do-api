const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    userName: { type: String, index: { unique: true } },
    password: String
})

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

userSchema.methods.comparePassword = function (plaintext) { return bcrypt.compareSync(plaintext, this.password) }

module.exports = mongoose.model('user', userSchema, 'users')
