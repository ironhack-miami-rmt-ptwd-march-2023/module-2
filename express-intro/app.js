
const express = require('express');
// we are importing a class from the express library, the constructor, 
// when called, it will create a server capable of handling requests and giving responses


const app = express();
// now that we have created an app object, it has many methods that we are going to use
// even though we did not write those methods ourselves
// the main we are going to use right now it app.get
// app.get gives a callback function with a request object and a response object as the automatically generated arguments



app.use(express.static('public'));
// now what we have defined the public folder as our static asset folder
// anywhere within the app, when looking for a static asset like a CSS file or an image
// instead of a relative path like ../../public/images we can do a top-down path
// that always starts with /    so instead of ../../public/images/cool-cat.webp
// it would just be /images/cool-cat.webp



// app.get takes 2 arguments 
// the first argument is /home, the url we are listening to
//  the second argument is the entire function with the request, response, next as arguments inside that
// request response and next are automatically generated arguments that express gives us access to 
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});



app.get('/home', (req, res) => {
    console.log(req);
    res.send('<h1>Welcome Ironhacker. :)</h1>');
  } );

app.get('/homer', (req, res) => {
    console.log(req);
    res.send('<h1>ha, you misspelled home!</h1>');
  }  );



  app.get('/cat', (request, response) => {
    // this ^ part is talking about the URL the user visits in the browser
    response.sendFile(__dirname + '/views/cool-cat.html');
    // this part is talking about which file to show^
  });

//   a middleware is a fancy word for a functiont that runs conditionally in between 2 other functions funning
// a route is the most basic type of middleware in express, 
// the const app = express() line is the first function that runs evertytime the server turns on
// and the app.listen() is the final functiont that runs everytime the server turns on
// anything that runs in between is called a middleware,
// we will go over more fancy middlewares later




// 2 arguments for app.listen
// first argument in the port you want to listen on 
// 2nd argument is a callback function for you to do somrthing on success
  app.listen(3000, () => console.log('My first app listening on port 3000! '));