
const express = require('express');
const app = express();
const products = require("./products-data.js"); 
const hbs = require('hbs');

app.set("views", __dirname + "/views");
// this line ^ tells our app which folder to find out views 
// in when we run res.render
app.set("view engine", "hbs");
// this line just sets hbs as the language for the views

hbs.registerPartials(__dirname + "/views/partials");


app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/blah-page', (req, res) => {
  res.render('blah', {secretWord: "blah"});
  //                 this ^ is like saying const secretWord = "blah" but doing it inside the hbs file
});


app.get('/welcome', (req, res)=>{
  let data = {bootCampName: "Ironhack", name: "Nick", course: "Remote Part Time Web Dev"}
  res.render('welcome', data);
  // i can pass in data without putting it inside {} because its already an object 
  // by doing this, im passing all 3 variables to the hbs file
});


app.get('/course-page/:theCourse', (req, res)=>{
  // the colon in this url means that the user will never actually visit the page /course-page/theCourse
  // instead, theCourse is like a variable so if the user goes to /course-page/blah
  // then that means theCourse === 'blah'
  let course = req.params.theCourse;
  
  console.log(course);
  res.send(course);
});


app.get('/all-products', (req, res)=>{
  res.render('products/all-products', {products: products})
});


app.get('/itm/:idNumber', (req, res)=>{
  let id = req.params.idNumber;
  // we are using double equals below because req.params.anything
  //  always returns a string
  // so if your ids are numbers, they wont triple equal the string version of the id
  let theProduct = products.find((product)=> product.id == id);
  // .find works the same as .filter except 
  // its not meant to be used to find several matches its meant to be used to find one match
  // so you should only use it with a condition that it unique (like an id)
  // and it only returns the first match
  // which means it does not return an array

  console.log(theProduct);
  res.render('products/product-page', theProduct);
});


app.get("/pokemon", (req, res)=>{
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then((result)=>{
    result.json().then((jsonResponse)=>{

      const pokemon = jsonResponse.results;

      res.render("pokemon/pokemon-list", {pokemon: pokemon});
    })
  })
})


app.get("/pokemonDetails/:pokemonName", (req, res)=>{
  const name = req.params.pokemonName;

  fetch("https://pokeapi.co/api/v2/pokemon/"+name)
  .then((result)=>{
    result.json().then((jsonResponse)=>{

      const name = jsonResponse.name;
      const img1 = jsonResponse.sprites.front_default;
      const img2 = jsonResponse.sprites.back_default
      

      
      res.render("pokemon/pokemon-details", {name, img1, img2});
      // this is the samae as {name:name, img1:img1, img2:img2}
    })
  })


})







  app.get('/cat', (req, res) => {
    // this ^ part is talking about the URL the user visits in the browser
    res.render('cool-cat');
    // ^ this part is talking about which file to show
    // it knows where to look and what the file extension is because 
    // we already configured that at the top of the file
  });



  app.listen(3000, () => console.log('My first app listening on port 3000! '));