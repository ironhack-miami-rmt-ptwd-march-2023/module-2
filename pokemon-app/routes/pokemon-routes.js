const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

// to create something in the DB we need 2 routes
// we need 1 get route to show the page where the user will input the info
// and then we need a post route for the form to send the info to and then redirect

router.get("/pokemon/new", (req, res)=>{
    res.render("new-pokemon");
})



router.post("/pokemon/create", (req,res)=>{
    Pokemon.create({
        name: req.body.pokemonName,
        type: req.body.pokemonType,
        img: req.body.img,
        evolves: req.body.evolves,
        moves: req.body.moves
    }).then((response)=>{
        res.redirect("/pokemon");
    })
})

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
        res.render("pokemon-list", {pokemon: allThePokemon});
    })
})

router.get("/pokemon/:id", (req, res)=>{
    const theID = req.params.id;
    Pokemon.findById(theID)
    .then((thePoke)=>{
        res.render("pokemon-details", {thePokemon: thePoke})
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
        res.render("pokemon-edit", {thePokemon: thePokemon})
    })
});



router.post("/pokemon/:theID/update", (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.theID,{
        name: req.body.pokemonName,
        type: req.body.pokemonType,
        img: req.body.img,
        evolves: req.body.evolves,
        moves: req.body.moves
    }).then(()=>{
        res.redirect("/pokemon/"+req.params.theID)
    })

})


 module.exports = router;