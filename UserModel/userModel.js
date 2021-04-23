const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    
    email: {
        type: String,
        require: true,
    },
    ip_address:{
        type: String,
        require: true
    },
    restartLinkPassword:{
        type: String,
    },
    date: {
        
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;