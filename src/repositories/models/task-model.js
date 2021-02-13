const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: String,
    done: Boolean,
    creationDate: Date,
    finishDate: Date
})

module.exports = {taskSchema, Task:mongoose.model('task', taskSchema, 'tasks')}
