const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true, // Corrected 'require' to 'required'
    },
    password: {
        type: String,
        required: true, // Corrected 'require' to 'required'
    },
    phone: {
        type: Number,
        required: true, // Corrected 'require' to 'required'
    },
    email: {
        type: String,
        required: true, // Corrected 'require' to 'required'
        unique: true // Ensure email is unique
    },
    referral: {
        type: String,
    },
    ip_address: {
        type: String,
        required: true // Corrected 'require' to 'required'
    },
    restartLinkPassword: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now // Set default value to current date
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;