const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({  // pass in an object with the fields we want for the trip details
    title: { 
        type: String,
        required: true,
        trim: true, //trims any whitespace
    },
    status: { //sets post to be public or private
        type: String,
        required: true,
        default: 'public',
        enum: ['public', 'private'],// enum list of values for status options uses array
    },
    body: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    // user: { // user connected to each trip
    //     type: mongoose.Schema.Types.ObjectId, // special type of mongoose object id connected with ref below
    //     ref: 'User', //refers to User model
    // },
    createdAt: { // time stamps creation
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model('Trip', TripSchema);