const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String,},
    discription: {type: String,maxLength: 600,},
    image: {type: String,macLength: 100,},
    createAt: {type: Date, default: Date.now,},
    updatedAt: {type: Date, default: Date.now,},
})

module.exports = mongoose.model('Course', Course);