const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pokeSchema = new Schema({
    name: String,
    type: String, 
    img: String, 
    evolves: Boolean,
    moves: [String]
});
// this will be the first time weve seen an array being saved to the db

const Pokemon = mongoose.model('Pokemon', pokeSchema);


module.exports = Pokemon;