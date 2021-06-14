
const Trip = require('../models/Trip') //brings in the trip model

module.exports = {

//TODO @desc Show add page
// @route GET /trips/add


//TODO @desc Process add form
// @route POST /trips

    createTrip: async (req, res) => {
        const trip = req.body;

        const newTrip = new TripMessage(trip); 

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

//TODO @desc Show single trip
// @route GET /trips/:id

//TODO @desc Show edit page
// @route GET /trips/edit/:id

//TODO @desc Show Update trip
// @route PUT trips/:id

//TODO @desc Delete trip
// @route DELETE /trips/:id

//TODO @desc User Trips
// @route GET /trips/user/:userId

}

//! Previous function 
// export const getPosts =  async (req, res) => {   //get request for trips with async await (mongoose) and try/catch
//     try {
//         const trips = await Trip.find({ status: 'public'})  //find public trips
//             .populate('user') //populate with user info from user model that's not part of trip 
//             .sort({ createdAt: 'desc'}) // sorts trips by time created in decending order
//             .lean() //added to pass into template

//             res.render('trips/index', { //renders newly created public trips page and passes in trips
//                 trips,
//             })

//     } catch (err) {
//         console.error(err)
//         res.render('error/500')
//     }
// }