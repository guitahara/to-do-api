const mongoose = require('mongoose')
const { taskSchema } = require('./task-model')

const projectSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId },
    name: String,
    tasks: [taskSchema]
})

module.exports = mongoose.model('project', projectSchema, 'projects')
