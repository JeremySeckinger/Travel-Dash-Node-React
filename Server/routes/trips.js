
const express = require('express');
const tripController = require('../controllers/trips'); //brings in getTrips function from trips controller--Note: need to add .js in node but not react

const router = express.Router();

// Accessed by going to localhost:5000/trips
router.get('/', tripController.getTrips); //executes the getTrips function
router.post('/', tripController.createTrip); //executes the create trip function
router.patch('/:id', tripController.updateTrip); //Patch to update existing documents dynamically with :id

module.exports = router;