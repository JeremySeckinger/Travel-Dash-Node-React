const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({  // pass in an object with the fields we want for the user
    googleId: { //separate from mongoID that is given by default
        type: String,
        required: true
    },
    displayName: { //first and last name together
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
        //removed required
    },
    createdAt: { // time stamps user creation
        type: Date,
        default: Date.now // automatically puts date and time in
    }
})

module.exports = mongoose.model('User', UserSchema)