const Trip = require('../models/Trip') //brings in the trip model

module.exports = {

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

    createTrip: async (req, res) => {
        try {
            res.send('Post Creation')
        } catch (error) {
            console.log(error);
        }
    }



}