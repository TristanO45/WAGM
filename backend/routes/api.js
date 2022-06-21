const { Router } = require("express");
const express = require('express');
const router = express.router();

// mongoDB user model
const userSchema = require('../models/userModel')

// post request to 'api/login'
//pass in controller for login,
router.post('/login', userController.verifyUser, (req,res) => {
 // Check if user info is verified
 // If successful, redirect to homepage
    if (res.locals.redirect) {
        res.redirect('/homepage')
    }
 // If not, respond with error message


 
}
);

// post request to 'api/signup
router.post('/signup', userController.createUser, (req, res) => {
    // 
});

module.express = router;