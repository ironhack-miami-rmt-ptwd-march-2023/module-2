const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function capitalize(val) {
    if (typeof val !== 'string') val = '';
    return val.charAt(0).toUpperCase() + val.substring(1);
  }


function isEmail(val){
    return val.includes("@") && val.includes(".com" || ".net" || ".edu");
}


const dogSchema = new Schema({
    email: {type: String, validate: {validator: isEmail, message: "Email address is not valid"}},
    name: {type: String, required: true, set: capitalize},
    color: String,
    age: Number,
    breed: {type: String, default: "Unknown"},
    size: {type: String, enum: ["Small", "Medium", "Large"]}
  });

  const Dog = mongoose.model('Dog', dogSchema);


  module.exports = Dog;