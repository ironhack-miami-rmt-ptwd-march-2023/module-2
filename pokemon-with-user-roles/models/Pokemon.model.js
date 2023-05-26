const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Trainer = require("../models/Trainer");


const pokeSchema = new Schema({
    name: String,
    type: String, 
    img: String, 
    evolves: Boolean,
    moves: [String],
    adopted: {type: Boolean, default: false}
});


const Pokemon = mongoose.model('Pokemon', pokeSchema);


module.exports = Pokemon;