const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({  // pass in an object with the fields we want for the trip details
    title: { 
        type: String,
        required: true,
        trim: true, //trims any whitespace
    },
    body: {
        type: String,
        required: true,
    },
    status: { //sets post to be public or private
        type: String,
        required: true,
        default: 'public',
        enum: ['public', 'private'],// enum list of values for status options uses array
    },
    // user: { // user connected to each trip
    //     type: mongoose.Schema.Types.ObjectId, // special type of mongoose object id connected with ref below
    //     ref: 'User', //refers to User model
    // },

    createdAt: { // time stamps creation
        type: Date,
        default: Date.now // automatically puts date and time in
    },
});

module.exports = mongoose.model('Trip', TripSchema);