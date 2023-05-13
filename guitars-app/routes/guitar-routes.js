const express = require("express");
const router = express.Router();
const Guitar = require("../models/Guitar");


// its not mandatory but its expected that if you have a page
// that shows many guitars, the url should be /guitars, 
// or it its a page that shows all your cars (for example)
// it should be /cars
router.get("/guitars", (req, res)=>{
    Guitar.find() 
    .then((allTheGuitars)=>{
     res.render("guitars", {guitars: allTheGuitars})
    })
    .catch((err)=>{
     console.log(err);
    });
 });


 router.get("/guitars/new", (req, res, next)=>{
    res.render("new-guitar");
 });


 router.post("/guitars/create", (req, res)=>{
    Guitar.create({
        model: req.body.theModel,
        condition: req.body.theCondition,
        price: req.body.thePrice,
        img: req.body.img,
        description: req.body.theDescription
    }).then((response)=>{
        res.redirect("/guitars")
    }).catch((err)=>{
        console.log(err);
    })
// on a post request, on the .then, you always redirect, never render
 });


 
 router.get("/guitars/:theID", (req, res)=>{
     // when you have something with a : in the route
     // that means the route will never go to 
     //  /guitars/theID it will go to something like /guitars/14hfh253534
     // whatever value actually gets put into the URL, will be accessible
     // as req.params.theID
     Guitar.findById(req.params.theID)
     .then((theGuitar)=>{
         res.render("guitarDetails", {theGuitar:theGuitar})
     })
     .catch((err)=>{
         console.log(err);
     });
 });

 





 module.exports = router;