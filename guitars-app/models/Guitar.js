const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const guitarSchema = new Schema({
    model: String,
    condition: String,
    price: Number,
    img: String,
    description: String
});

const Guitar = mongoose.model('Guitar', guitarSchema);


module.exports = Guitar;