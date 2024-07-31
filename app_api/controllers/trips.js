const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - list all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model.find({}).exec();

        // Uncomment the folowing line to show the results of query 
        // on the console
         //console.log(q);

    if (!q)
    { // Datanase returned no data
        return res.status(404).json(err);
    } else { // Return resulting trip list
        return res.status(200).json(q);

    }
};

// GET: /trips - list all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model.find({'code' : req.params.tripCode}).exec();

        // Uncomment the folowing line to show the results of query 
        // on the console
         //console.log(q);

    if (!q)
    { // Datanase returned no data
        return res.status(404).json(err);
    } else { // Return resulting trip list
        return res.status(200).json(q);

    }
}

module.exports = {
    tripsList,
    tripsFindByCode
};