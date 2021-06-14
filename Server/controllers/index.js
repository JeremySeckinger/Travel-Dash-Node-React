// const express = require('express');
// const router = express.Router()
// const {ensureAuth, ensureGuest} = require('../middleware/auth') //using destructuring to bring in the middleware auth functions to routes

// const Trip = require('../models/Trip') //brings in Trip model

// //* @desc Login/Landing page
// // @route GET / 
// router.get('/', ensureGuest, (req, res) => { //whenever middleware is used as a route it is added as a second argument--->ensureGuest added here for user that is not logged in
//     res.render('login', {
//         layout: 'login', //adds login layout to login route
//     })
// })

// //* @desc Dashboard
// // @route GET /dashboard
// router.get('/dashboard', ensureAuth, async (req, res) => { //ensureAuth added for logged in user from auth middleware function
//     try {
//         const trips = await Trip.find({ user: req.user.id }).lean()  //limits this to the user with the Id---> .lean() returns document from query as plain js objects not MongooseDocuments (needed to use and pass into template)
//         res.render('dashboard', {
//             name: req.user.firstName, //Added to render name on dashboard view
//             trips // passes in trips
//         })
//     } catch(err) {
//         console.error(err)
//         res.render('error/500')
//     }


// })

// module.exports = router