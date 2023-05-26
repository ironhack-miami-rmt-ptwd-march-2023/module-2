const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcryptjs = require('bcryptjs');
const mongoose = require("mongoose");
const isLoggedIn = require("../utils/isLoggedIn");


router.get("/signup", (req, res, next)=>{
    res.render("users/signup");
});

router.post("/signup", (req, res, next)=>{
    const username = req.body.username;
    const email = req.body.email;
    
    const password = req.body.password;
    // activate bcrypt to create the salt which will act as a signature that will be attached to the scrambled password
    // bcrypt will use this later to compare the password hash to the user's input
    bcryptjs
    .genSalt(10)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {

        User.create({username:username, password: hashedPassword, email: email})
        .then(()=>{
            req.flash("success", "Sign-up was successful");
            res.redirect("/");
        })
        .catch((error)=>{
            if (error instanceof mongoose.Error) {
                // the way to create a message with req.flash to show user feedback
                // after a redirect is like this
                req.flash("error", error.message);
                // first argument is the name of the key inside the req.flash object
                // second argument is the value
                res.redirect("/signup");
            }
        })
    })
    .catch((error) => next(error));
});


router.get("/login", (req, res, next)=>{
    res.render("users/login.hbs");
});



router.post("/login", (req, res, next)=>{
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    

    // the first thing we do is just to simply search through our databse and see if we find a user with a username matching what the person just typed in
    User.findOne({ username: req.body.username })
    .then(foundUser => {
        // this .then only happens after we search for a user with username equal to 
        // req.body.username and the promise resolves successfully
      if (!foundUser) {
        // this if only happens we successfully queries the databse and there is no user with that username
        req.flash("error", "Username Not Found");
        // for now we'll just console log an error message if we cant find a user with that username
        // we will add a package for error messages later
        res.redirect("/login");
        return;
        // the following else if only happens if there was an actual user found with 
        // username equal to req.body.username
      } else if (bcryptjs.compareSync(req.body.password, foundUser.password)) {
        // inside thise else if only happens if the password matches
        

        req.session.currentUser = foundUser;
        // ^ this is the magic right here this is how we log in
        req.flash("success", "Successfully Logged In");
        res.redirect('/');
      } else {
        // this else only happens if we found the user with the username but the passwords didnt match
        req.flash("error", "Password Do Not Match");
        res.redirect("/login");
        
      }
    })
    .catch(error => next(error));
});



router.post("/logout", (req, res, next)=>{
    req.session.destroy();
    res.redirect("/");
  });


  router.get("/user-profile", isLoggedIn, (req, res, next)=>{
    User.findById(req.session.currentUser._id).populate("pokemon")
    .then((theUser)=>{
      res.render("users/profile", {theUser: theUser})
    })
  })
  






module.exports = router;