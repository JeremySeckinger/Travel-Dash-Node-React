
const express = require('express');
const tripController = require('../controllers/trips'); //brings in getTrips function from trips controller--Note: need to add .js in node but not react

const router = express.Router();

// Accessed by going to localhost:5000/trips
router.get('/', tripController.getTrips); //executes the getTrips function
router.post('/', tripController.createTrip); //executes the create trip function

module.exports = router;






//! Code below being refactored into controller--New code above with routes

// const express = require('express');
// const router = express.Router()
// const {ensureAuth} = require('../middleware/auth') //using destructuring to bring in the middleware auth functions to routes

// const Trip = require('../models/Trip') //brings in Trip model

// //* @desc Show add page
// // @route GET /trips/add
// router.get('/add', ensureAuth, (req, res) => { 
//     res.render('trips/add')
// })

// //* @desc Process add form
// // @route POST /trips
// router.post('/', ensureAuth, async (req, res) => { 
//     try {
//         req.body.user = req.user.id //gives us data sent in from form, but middleware needs to be added (Body parser) .user = req.user.id added to get user info attached to request
//         await Trip.create(req.body) //creates the trip passing in req.body
//         res.redirect('/dashboard') //redirects to dashboard
//     } catch (err) {
//         console.error(err)
//         res.render('error/500')
//     }
// })

// //* @desc Show all trips
// // @route GET /trips
// router.get('/', ensureAuth, async (req, res) => {   //get request for trips with async await (mongoose) and try/catch
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
// })

// //* @desc Show single trip
// // @route GET /trips/:id
// router.get('/:id', ensureAuth, async (req, res) => { 
//     try {
//         let trip = await Trip.findById(req.params.id) 
//         .populate('user') //populates user info
//         .lean() //return as json not mongoose

//         if(!trip) {
//             return res.render('error/404')
//         }

//         // renders template to show trip
//         res.render('trips/show', {
//             trip //passes in object with trip fetched from database to display data
//         })
//     } catch (err) {
//         console.error(err)
//         res.render('error/404') //uses 404 here because it's most likely it can't be found
//     }
// })

// //* @desc Show edit page
// // @route GET /trips/edit/:id
// router.get('/edit/:id', ensureAuth, async (req, res) => { //async/await get request for edit trip page
//     try {
//         const trip = await Trip.findOne({//finding one trip 
//             _id: req.params.id
//         }) .lean()  //passing into template
    
//         if(!trip) { //checks to see if trip is there
//             return res.render('error/404') //renders 404 error if no trip there
//         }
    
//         if(trip.user != req.user.id) { //redirects if not story owner
//             res.redirect('/trips') //back to public trips page
//         } else{
//             res.render('trips/edit', {
//                 trip,
//             })
//         }
//     } catch (err) {
//         console.error(err)
//         return res.render('error/500')
//     }
// })

// //* @desc Show Update trip
// // @route PUT trips/:id
// router.put('/:id', ensureAuth, async (req, res) => { 
//     try {
//         let trip = await Trip.findById(req.params.id).lean() //checks for trip using Trip model, findbyid method, and the url, and lean to override mongoose

//     if (!trip) { //if there is no trip just returns error 404
//         return res.render('error/404')
//     }
//     //copied from above to check to see if owner of story
//     if(trip.user != req.user.id) { //redirects if not story owner
//         res.redirect('/trips') //back to public trips page
//     } else {
//         trip = await Trip.findOneAndUpdate({ _id: req.params.id }, req.body, { // "let trip =" used above, so just reassigning trip to Trip model and updating it by finding id, and req.body added because that is what is being updated
//             new: true, // creates new if doesn't exist
//             runValidators: true, //makes sure that mongoose fields are valid
//         })

//         res.redirect('/dashboard') //redirects to dashboard when done
//     }
//     } catch (err) {
//         console.error(err)
//         return res.render('error/500')
//     }
// })

// //* @desc Delete trip
// // @route DELETE /trips/:id
// router.delete('/:id', ensureAuth, async (req, res) => { 
//     try {
//         await Trip.remove({ _id: req.params.id })
//         res.redirect('/dashboard')
//     } catch (err) {
//         console.error(err)
//         return res.render('error/500')
//     }
// })

// //* @desc User Trips
// // @route GET /trips/user/:userId
// router.get('/user/:userId', ensureAuth, async (req, res) => { 
//     try {
//         const trips = await Trip.find({ //fetches trips 
//             user: req.params.userId, //gets only where user is equal to the userId parameter
//             status: 'public', //gets only trips with status of public so private stories don't show too
//         })
//             .populate('user')
//             .lean()

//         //using same template as public trips, except it only shows individual users public trips
//         res.render('trips/index', { 
//             trips //user's trips passed in
//         })
//     } catch (err) {
//         console.error(err)
//         res.render('error/500')
//     }
// })


// module.exports = router