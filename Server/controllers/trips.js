
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