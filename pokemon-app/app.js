const express  = require('express');
const app      = express();
const hbs      = require('hbs'); 
const mongoose = require('mongoose')



app.use(express.static('public'));
 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// body parser gives us access to req.body on post requests


// remember if you are using windows your mongoose conntect url may be slightly different
mongoose.connect('mongodb://localhost/pokemonApp')
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("error connecting to database");
})


app.get("/", (req, res)=>{
    res.render("index");
})

const pokemonRoutes = require("./routes/pokemon-routes");
app.use("/", pokemonRoutes);
// for now, all routes have a "/" as the firsts argument.   we'll talk about it later
// also, fun fact, route files are called controllers, this is the C in the MVC pattern




app.listen(3000, () => console.log('My first app listening on port 3000! '));
