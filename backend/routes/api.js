const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController")

// post request to 'api/login'
//pass in controller for login,
router.post("/login", userController.verifyUser, cookieController.setCookie, (req, res) => {
  // Check if user info is verified
  // If successful, redirect to homepage
  if (res.locals.auth.verified) {
    console.log('Successful Cookie set:', req.cookies)
    return res.status(200).send(`${res.locals.auth.message}`);
  }
  // If not, respond with error message
  return res.status(403).send("Incorrect User Info");
});

// post request to 'api/signup
router.post("/signup", userController.createUser, (req, res) => {
  // Return 201 status for successful signup
  res.status(201).json("User Created Successfully!");
});

module.exports = router;
