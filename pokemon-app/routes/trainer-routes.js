const express = require("express");
const router = express.Router();
const Trainer = require("../models/Trainer");
const Pokemon = require("../models/Pokemon");


router.get("/", (req, res)=>{
    
    // even though the route looks like its just "/"
    // its actually "/trainers"
    // because i have attached a "/trainers" prefix to every single route in this file
    Trainer.find()
    .then((allTheTrainers)=>{
        res.render("trainers/trainers-page", {trainers: allTheTrainers});
    });
});



router.get("/new", (req, res)=>{
    res.render("trainers/new-trainer");
})


router.post("/create", (req, res)=>{
    Trainer.create({
        name: req.body.trainerName,
        hometown: req.body.trainerHometown,
        age: req.body.trainerAge,
        img: req.body.trainerImg
    }).then(()=>{
        res.redirect("/trainers")
    })
})


router.get("/:theID", (req, res)=>{

    Trainer.findById(req.params.theID)
    .then((theTrainer)=>{
        Pokemon.find({trainer: theTrainer._id})
        .then((pokemonForThisTrainer)=>{
            res.render("trainers/details", {theTrainer: theTrainer, pokemon: pokemonForThisTrainer});
            
        })
    })

})








module.exports = router;