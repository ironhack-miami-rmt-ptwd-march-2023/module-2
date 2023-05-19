const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trainerSchema = new Schema({
    name: String,
    hometown: String,
    age: Number,
    img: String
});


const Trainer = mongoose.model('Trainer', trainerSchema);



module.exports = Trainer;