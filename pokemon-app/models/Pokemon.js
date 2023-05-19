const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Trainer = require("../models/Trainer");


const pokeSchema = new Schema({
    name: String,
    type: String, 
    img: String, 
    evolves: Boolean,
    moves: [String],
    trainer: {type: mongoose.Types.ObjectId, ref: 'Trainer'}
    // the string in the ref field must be equal to the uppercased singular version of the other collection
    // that you want to relate to
});
// this will be the first time weve seen an array being saved to the db

const Pokemon = mongoose.model('Pokemon', pokeSchema);


module.exports = Pokemon;