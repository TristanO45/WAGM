const User = require('../models/userModel');
const bcrypt = require('bcrypt')
// mongoDB user model
const userSchema = require('../models/userModel')


const userController = {};
    // Create a new user in the database
    // Will be used for signup

    userController.createUser = (req, res, next) => {
        const { username, password } = req.body.data;
        const cryptPassword = bcrypt.hash(password, 10);

        User.create({ username, cryptPassword })
        .then((user) => {
            res.status(201).json(user)
        }).catch((err) => {
            return next(err)
        });
    }

    userController.verifyUser = (req, res, next) => {
        const { username, password, date } = req.body;
        // Try to return any errors right away
    if (username == '' || password == '') {
        res.locals.err = 'No user info input';
        return next()
      } 
       // Checking if the user already exists
        userSchema.findOne({username})
        .then(result => {
            // if document was found, 
            if (result) {
                // check if result password = passed in password
                // Will need to use bcrypt.compare once bcrypt is setup
                if (result.password === password) {
                    res.locals.redirect = true
                } else {
                    res.locals.err = "Password Incorrect";
                }
                return next()
            } else {
                // if document was NOT found
                res.locals.err = 'User not found';
                return next()
            }
        }).catch(err => {
            console.log(err);
            return next(err);
        })  
    }

module.exports = userController;