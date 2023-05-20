const express = require('express');
const router = express.Router();
const User = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  User.find()
  .then((allTheUsers)=>{
    res.render("index", {users: allTheUsers})
  })
  .catch((err)=>{
    next(err);
    // next is equal to the next middleware in app.js
  })


});

module.exports = router;
