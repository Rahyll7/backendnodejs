const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    cofirmPassword:{
        type: String,
        required:true
    }



})

module.exports = mongoose.model('Contact',contactSchema)