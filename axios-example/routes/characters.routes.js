const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then((response)=>{
        // i always console log the response when using an API because you never know the exact structure of the data youre going to receive
        // console.log(response.data);
        // also, axios always puts the actual data in response.data
        res.render("characters/list", {characters: response.data});
    }).catch((err)=>next(err));

});


router.get("/characters/new", (req, res, next)=>{
    res.render("characters/new");
});



router.post("/characters/create", (req, res, next)=>{
    const {theName, theWeapon, theOccupation} = req.body;
    // now i have 3 variables with ^ these names
    const myParams = {name: theName, weapon: theWeapon, occupation:theOccupation};
    if(req.body.theDebt){
        myParams.debt = true;
    }  else {
        myParams.debt = false;
    }

    // second argument on a axios post request needs to be an object
    // this object will become req.body on the api's server
    // the documentation should tell you what params you need to send in req.body
    axios.post("https://ih-crud-api.herokuapp.com/characters", myParams)
    .then((response)=>{
        res.redirect("/characters")
    }).catch((err)=>next(err));
});




router.post("/characters/delete/:theID", (req, res, next)=>{
    const characterID = req.params.theID;
    axios.delete("https://ih-crud-api.herokuapp.com/characters/"+characterID)
    .then((response)=>{
        res.redirect("/characters")
    }).catch(err=>next(err));
})

module.exports = router;
