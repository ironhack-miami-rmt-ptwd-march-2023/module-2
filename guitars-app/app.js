const express  = require('express');
const app      = express();
const hbs      = require('hbs'); 
const mongoose = require('mongoose')
const Guitar   = require("./models/Guitar");


app.use(express.static('public'));
 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect('mongodb://localhost/guitarsApp')
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("error connecting to database");
})

const guitarRoutes = require("./routes/guitar-routes");
app.use("/", guitarRoutes);
// for now, all routes have a "/" as the firsts argument.   we'll talk about it later
// also, fun fact, route files are called controllers, this is the C in the MVC pattern




app.listen(3000, () => console.log('My first app listening on port 3000! '));
