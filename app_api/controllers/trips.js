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
                .json(err); 
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
                .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q)
    }
    
};

// POST: /trips - Add a new trip
const tripsAddTrip = async(req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });
  const q = await newTrip.save();

    if (!q) {
      return res
        .status(400)
        .json(err);
    } else {
      return res
        .status(201)
        .json(q);
    }
  
};

// PUT: /trips/:tripCode - Update an existing trip
const tripsUpdateTrip = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const q = await Model
  .findOneAndUpdate(
    { 'code': req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    }
  ).exec();

  if (!q) {
    return res
      .status(400)
      .json(err);
  } else {
    return res
       .status(201)
       .json(q);
  }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
}; 