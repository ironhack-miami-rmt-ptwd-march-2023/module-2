const express  = require('express');
const app      = express();
const hbs      = require('hbs'); 
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const session = require('express-session');
const MongoStore = require('connect-mongo');




app.use(express.static('public'));
 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// body parser gives us access to req.body on post requests

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// remember if you are using windows your mongoose conntect url may be slightly different
mongoose.connect('mongodb://localhost/pokemonApp')
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("error connecting to database");
});



// a session is just basically a json object full of info that persists
// between requests (its kind of like req.body except req.body only lasts 1 request and then it empties out)
// a session will continue persisting until something happens to destroy the session
// usually people program their app so the session is destroyed when a user logs out

app.set('trust proxy', 1);
 
  app.use(
    session({
      secret: "canBeAnything",
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 60000
      }, // ADDED code below !!!
      store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/pokemonApp'
 
        // ttl => time to live
        // ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
      })
    })
  );


app.use((req, res, next)=>{
  res.locals.theUserObject = req.session.currentUser || null;
  next();
})



app.get("/", (req, res)=>{
    res.render("index");
})

const pokemonRoutes = require("./routes/pokemon-routes");
app.use("/", pokemonRoutes);
// for now, all routes have a "/" as the firsts argument.   we'll talk about it later
// also, fun fact, route files are called controllers, this is the C in the MVC pattern

const trainerRoutes = require("./routes/trainer-routes");
app.use("/trainers", trainerRoutes);
// the first arguments in app.use when you are connecting a routes file
// represents a prefix that you are attaching to every single route 
// in that file

const userRoutes = require("./routes/user-routes");
app.use("/", userRoutes);



app.listen(3000, () => console.log('My first app listening on port 3000! '));
