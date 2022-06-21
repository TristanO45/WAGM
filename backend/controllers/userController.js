const User = require('./models/userModel');

const userController = {
    // Create a new user in the database
    // Will be used for signup

    createUser(req, res, next) {
        const { username, password } = req.body;
        User.create({ username, password })
        .then((user) => {
            res.status(201).json(student)
        }).catch((err) => {
            return next(err)
        });
    },

    verifyUser(req, res, next) {
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
            }
        }).catch(err => {
            console.log(err);
            return next(err);
        })  
    },
}