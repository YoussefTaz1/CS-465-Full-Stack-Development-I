const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - List all trips
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) //no filter return all records
        .exec();


    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err)
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q)
    }
};

// GET: /trips/:tripCode - Find specific trip by tripCode
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return single record
        .exec();


    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err)
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q)
    }
};


module.exports = {
    tripsList,
    tripsFindByCode
};