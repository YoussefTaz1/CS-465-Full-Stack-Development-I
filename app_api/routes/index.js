const express = require('express'); //express app
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

// GET Method routes tripsFindByCode - requires parameter 
// PUT Method routes tripsUpdateTrip - requires parameter 
router
    .route('/trips/:tripCode') 
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); 

module.exports = router;