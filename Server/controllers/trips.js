const express = require('express');
const mongoose = require('mongoose');

const Trip = require('../models/Trip') //brings in the trip model

module.exports = {

//* @desc Process add form
// @route POST /trips
    createTrip: async (req, res) => {
        const trip = req.body;

        const newTrip = new Trip(trip); 

        try {
            await newTrip.save();

            res.status(201).json(newTrip);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },

//* @desc Show all public trips
// @route GET /trips
    getTrips: async (req, res) => {
        try {
            const trips = await Trip.find({ status: 'public'});  //find public trips

                res.status(200).json(trips);
        } catch (error) {
        console.error(error)
        res.status(404).json({ message: error.message });
        }
        
    },

//* @desc Update trip
// @route PATCH trips/:id
    updateTrip: async (req, res) => {
            const { id: _id } = req.params;
            const trip = req.body;
            
            //Makes sure id is valid--if not valid, return status 404 w/message
            if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No trip with that id');

            const updatedTrip = await Trip.findByIdAndUpdate(_id, trip, { new: true });
        
            res.json(updatedTrip);
    },

//TODO @desc Delete trip
// @route DELETE /trips/:id
    deleteTrip: async (req, res) => {
        const { id } = req.params;

        //Makes sure id is valid--if not valid, return status 404 w/message
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No trip with that id');

        //Delete by id
        await TripMessage.findByIdAndRemove(id);

        res.json({ message: 'Trip deleted succesfully'});
    }

//TODO @desc Show single trip
// @route GET /trips/:id





//TODO @desc User Trips
// @route GET /trips/user/:userId

}
