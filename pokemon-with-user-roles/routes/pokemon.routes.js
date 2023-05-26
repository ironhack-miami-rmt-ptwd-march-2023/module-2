const express    = require("express");
const router     = express.Router();
const Pokemon    = require("../models/Pokemon.model");
const User       = require("../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");






router.get("/pokemon/new", isLoggedIn, (req, res, next)=>{
        res.render("pokemon/new-pokemon");
});



router.post("/pokemon/create", isLoggedIn, (req,res,next)=>{
    Pokemon.create({
        name: req.body.pokemonName,
        type: req.body.pokemonType,
        img: req.body.img,
        evolves: req.body.evolves,
        moves: req.body.moves,
    }).then((response)=>{
        req.flash("success", "Pokemon Successfully Created");
        res.redirect("/pokemon");
    })
    .catch((err)=>next(err));
});



router.get("/pokemon", (req, res, next)=>{
    console.log(req.session);
    Pokemon.find()
    .then((allThePokemon)=>{
        res.render("pokemon/pokemon-list", {pokemon: allThePokemon});
    })
    .catch((err)=>next(err));
})

router.get("/pokemon/:id", (req, res, next)=>{
    const theID = req.params.id;

    Pokemon.findById(theID)
    .then((thePoke)=>{
        if(req.session.currentUser){
            User.findById(req.session.currentUser._id)
            .then((theUser)=>{
                let isMyPokemon = theUser.pokemon.some(function(poke) {
                    return poke.equals(theID);
                });
                res.render("pokemon/pokemon-details", {thePokemon: thePoke, isMyPokemon: isMyPokemon})
            })
        } else {
            res.render("pokemon/pokemon-details", {thePokemon: thePoke, isMyPokemon: false})
        }
        })
    .catch((err)=>next(err));
});


router.post("/pokemon/delete/:theID", (req, res, next)=>{
    Pokemon.findByIdAndRemove(req.params.theID)
    .then(()=>{
        req.flash("success", "Pokemon Successfully Deleted");
        res.redirect("/pokemon");
    })
    .catch((err)=>next(err));
});


router.get("/pokemon/:id/edit", (req, res,next)=>{
    Pokemon.findById(req.params.id)
    .then((thePokemon)=>{
        res.render("pokemon/pokemon-edit", {thePokemon: thePokemon})
        })
        .catch((err)=>next(err));
    });



router.post("/pokemon/:theID/update", (req, res, next)=>{
    Pokemon.findByIdAndUpdate(req.params.theID,{
        name: req.body.pokemonName,
        type: req.body.pokemonType,
        img: req.body.img,
        evolves: req.body.evolves,
        moves: req.body.moves,
    }).then(()=>{
        req.flash("success", "Pokemon Was Updated Successfully");
        res.redirect("/pokemon/"+req.params.theID);
    })
    .catch((err)=>next(err));

});



router.post("/pokemon/adopt/:id", isLoggedIn, (req, res, next)=>{
    const pokemonID = req.params.id;
    Pokemon.findById(pokemonID)
    .then((thePokemon)=>{
        const userID = req.session.currentUser._id;
        User.findByIdAndUpdate(userID, {
            $push: {pokemon: thePokemon}
        })
        .then(()=>{
            Pokemon.findByIdAndUpdate(pokemonID, {adopted: true})
            .then(()=>{
                req.flash("success", "pokemon successfully adopted");
                res.redirect("/pokemon");
            })
        })
        .catch((err)=>next(err));
    }).catch((err)=>next(err));
});




 module.exports = router;