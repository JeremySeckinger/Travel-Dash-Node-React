const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({  // pass in an object with the fields we want for the user
    
    name: { 
        type: String, 
        required:  true },

    email: { 
        type: String, 
        required: true 
    },

    password: { 
        type: String, 
        required: true
    },
    
    id: { 
        type: String 
    },

})

module.exports = mongoose.model('User', UserSchema)