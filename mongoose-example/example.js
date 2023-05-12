// mongoose is how a node application can communicate with a mongo database
// you dont need to use express to use mongoose
// but most of the time we will be using express with mongoose
// in this example were just going to use a plain node project without express

// ODM - Object document mapper is what mongoose is 
// in other languages sometimes this is caled an ORM - Object/Relational Mapping system
// the main reason that ODMs and ORMs were invented is because 
// for a long time eberybody used SQL and SQL is very different language than any other common programming language

// example.js

const mongoose = require('mongoose');
// import the mongoose package
// now we have access to a few methods like .connect and .model and .schema



mongoose
  .connect('mongodb://localhost/mongooseExample') // the start of this url will be the same for everything we do locally but the end part controls the name of the db
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));
// even though the .connect url decided the name of the DB
// the DB doesnt get created until the first actual document gets saved


// models should be named singular, not plural, and start with a capital letter, like creating a class
const Cat = mongoose.model('Cat', { name: String });
//                           |
//                this part decides the name of the collection
//                but Cat -> cats in the db
//so we name is singular capitalized, and mongoose translates it to lower case plural in the DB


// now that we have created a model, we have access a bunch more methods 
// like .create .findByIdAndUpdate .find .findByID  
// all the methods we use to save info and edit info in the DB

// we reference the model to get access to the .create method
// Cat.create({
//     name: "Garfield",
// }).then((response)=>{
//     console.log(response);
// })
// inside the .create method we pass an object that will hold all the info for our new object in the DB


// .find() with no argument just finds all the cats
// Cat.find()
// .then((allTheCats)=>{

//     console.log(allTheCats);

// })



// this one has a projection so we dont see the ids or version fields in the console log 
// Cat.find().select({_id: 0, __v: 0})
// .then((allTheCats)=>{

//     console.log(allTheCats);
// })



// Cat.find({name: "Garfield"})
// .then((response)=>{
//     console.log(response);
// })


// Cat.find({$or: [{name: "Garfield"}, {name: "Margo"}]}).sort({name: 1})
// .then((response)=>{
//     console.log(response);
// })
