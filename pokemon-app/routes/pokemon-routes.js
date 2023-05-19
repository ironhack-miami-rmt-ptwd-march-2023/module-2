const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");
const Trainer = require("../models/Trainer");

// to create something in the DB we need 2 routes
// we need 1 get route to show the page where the user will input the info
// and then we need a post route for the form to send the info to and then redirect

router.get("/pokemon/new", (req, res)=>{
    Trainer.find()
    .then((allTrainers)=>{
        res.render("pokemon/new-pokemon", {trainers: allTrainers});
    })
    // res render is talking about which file to show
});



router.post("/pokemon/create", (req,res)=>{
    Pokemon.create({
        name: req.body.pokemonName,
        type: req.body.pokemonType,
        img: req.body.img,
        evolves: req.body.evolves,
        moves: req.body.moves,
        trainer: req.body.theTrainer
    }).then((response)=>{
        res.redirect("/pokemon");
        // res redirect is talking about which url to send the user to
    })
});

// and here is a fancier version of the same route using object destructuring
// to make the route shorter

// router.post("/pokemon/create", (req,res)=>{
//     let {pokemonName: name, pokemonType: type, img, evolves, moves} = req.body;
//     Pokemon.create({name, type, img, evolves, moves}).then((response)=>{
//         res.redirect("/")
//     });
// });


router.get("/pokemon", (req, res)=>{
    Pokemon.find()
    .then((allThePokemon)=>{
        res.render("pokemon/pokemon-list", {pokemon: allThePokemon});
    })
})

router.get("/pokemon/:id", (req, res)=>{
    const theID = req.params.id;
    // the .populate method in mongoose can noly be done after running something like .find or .findbyID
    // and what it does is it looks at the pokemon that have been found, and then does a subsequent .find on the related model
    // the string that goes inside the .populate as the argument must match
    // the key in the model that you are finding
    // so if Pokemon model has a key called trainer (lowercase)
    // then that is what you need to put inside .populate
    // (.populate should always have a lower case argument because keys 
    // on models should always be lower cased)
    Pokemon.findById(theID).populate("trainer")

    .then((thePoke)=>{
        // the .populate method, if it works, it finds the .trainer field on each pokemon and transforms it from an ID to an actual trainer object
        console.log(thePoke);
        res.render("pokemon/pokemon-details", {thePokemon: thePoke})
    })
})


router.post("/pokemon/delete/:theID", (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.theID)
    .then(()=>{
        res.redirect("/pokemon");
    });
});


router.get("/pokemon/:id/edit", (req, res)=>{
    Pokemon.findById(req.params.id)
    .then((thePokemon)=>{
        Trainer.find().then((allTrainers)=>{

            allTrainers.forEach((theTrainer)=>{

               if((theTrainer._id).equals(thePokemon.trainer)){
                    theTrainer.blah = true;
                    // im making up a random new attribute to attach to the trainer
                    // but only attaching it to one trainer, the trainer who owns
                    // this pokemon
                    // so the other trainers wont even have a .blah
                    // but this trainer will
               }
            })

            res.render("pokemon/pokemon-edit", {thePokemon: thePokemon, trainers: allTrainers})
        })
    })
});



router.post("/pokemon/:theID/update", (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.theID,{
        name: req.body.pokemonName,
        type: req.body.pokemonType,
        img: req.body.img,
        evolves: req.body.evolves,
        moves: req.body.moves,
        trainer: req.body.theTrainer
    }).then(()=>{
        res.redirect("/pokemon/"+req.params.theID)
    })

})


 module.exports = router;