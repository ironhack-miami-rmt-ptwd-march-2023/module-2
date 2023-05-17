const express = require('express');
// imports express package

const hbs = require('hbs');
// imports hbs
const path = require('path');
// imports path which is the thing that allows us to tell hbs where to find the files
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
// import punkAPI NPM package

const app = express();
// this line initializes the express project and gives us 
// access to methods like app.use app.get app.listen
const punkAPI = new PunkAPIWrapper();
// initialize punkapi npm package and give us access to methods like 
// getBeers()

app.set('view engine', 'hbs');
// this line sets hbs as view engine
app.set('views', path.join(__dirname, 'views'));
// this line tells hbs where to find the views

hbs.registerPartials(path.join(__dirname, 'views/partials'));
// tell hbs where to find partials

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});


// app.get('/beers', (req, res) => {
//   punkAPI.getBeers()
//   .then(beersFromApi => {
//     console.log('Beers from the database: ', beersFromApi[0])
//     res.render('beers', {beers: beersFromApi});
//   })
//   .catch(error => console.log(error));
// });


// app.get('/random', (req, res) => {
//   punkAPI
//   .getRandom()
//   .then(responseFromAPI => {
//     console.log(responseFromAPI);
//     const theBeer = responseFromAPI[0];
//     // because the api gives us back an array with one object in it

//     res.render('random', {theBeer});
//     // this is shorthand for {theBeer:theBeer}
//   })
//   .catch(error => console.log(error));
// });



app.get("/beers", (req, res, next)=>{
  fetch("https://api.punkapi.com/v2/beers")
  .then((response)=>{
    response.json()
    .then((jsonResponse)=>{
      res.render('beers', {beers: jsonResponse});
    })
  })
  .catch((err)=>{
    console.log(err);
  }) 
});


app.get("/random", (req, res, next)=>{
  fetch("https://api.punkapi.com/v2/beers/random")
  .then((response)=>{
    response.json()
    .then((jsonResponse)=>{
      const theBeer = jsonResponse[0];
      res.render("random", {theBeer});
    })
  })
  .catch((err)=>{
    console.log(err);
  })
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
