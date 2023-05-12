const mongoose = require('mongoose');

const Dog = require("./Dog.js");


mongoose
  .connect('mongodb://localhost/mongooseExample') // the start of this url will be the same for everything we do locally but the end part controls the name of the db
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


//   Dog.create({
//     name: "lilly",
//     color: "Brown",
//     age: 4,
//     size: "Large",
//     email: "lillythedogyahoo.com"
//   }).then((response)=>{
//     console.log(response);
//   })
//   .catch((err)=>{
//     console.log(err)
// })


// Dog.updateOne(
//     {name: "Clyde"},
//     {breed: "Boxer"}
//     )
//     .then((res)=>{
//         console.log(res)
//     })


// Dog.findByIdAndUpdate("645d7fcf6ffcee5e504fc04d", {age: 4})
// .then((res)=>{
//     console.log(res);
// when you udpate and console log the response, you actually see the old version of the thing
// which is slightly annoying sometimes in an express app
// })


// Dog.findByIdAndUpdate("645d7fcf6ffcee5e504fc04d", {age: 7.5}, {new: true})
// .then((res)=>{
//     console.log(res);
    // if you want to see the new verison when you console log the response
    // you need to add an additional arguments
// });
 

