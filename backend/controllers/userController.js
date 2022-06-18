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
    }
}