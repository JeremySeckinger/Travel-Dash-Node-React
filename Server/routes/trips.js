const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const tripController = require('../controllers/trips'); //brings in getTrips function from trips controller--Note: need to add .js in node but not react

// Accessed by going to localhost:5000/trips
router.get('/', tripController.getTrips); //executes the getTrips function
router.post('/', auth.auth, tripController.createTrip); //executes the create trip function
router.patch('/:id', auth.auth, tripController.updateTrip); //Patch to update existing documents dynamically with :id
router.delete('/:id', auth.auth, tripController.deleteTrip); //Delete trip functionality
router.patch('/:id/likeTrip', auth.auth, tripController.likeTrip); //Like trip functionality

module.exports = router;

//TODO implement get trip by id
// router.get('/:id', tripController.getTrip);