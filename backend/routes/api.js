const { Router } = require("express");
const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');

// post request to 'api/login'
//pass in controller for login,
router.post('/login', userController.verifyUser, (req,res) => {
 // Check if user info is verified
 // If successful, redirect to homepage
    if (res.locals.redirect) {
       return res.status(200).send('Login Successful')
    }
  // If not, respond with error message
    return res.status(403).send('Incorrect User Info')
}
);

// post request to 'api/signup
router.post('/signup', userController.createUser, (req, res) => {
    // Return 201 status for successful signup
        res.status(201).send
});

module.exports = router;