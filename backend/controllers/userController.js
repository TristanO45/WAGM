const bcrypt = require("bcrypt");
const userSchema = require("../models/userModel");

const userController = {};
// Create a new user in the database
// Will be used for signup

userController.createUser = async (req, res, next) => {
  try {
    const { username, password, date } = req.body.userInfo;
    const cryptPassword = await bcrypt.hash(password, 10);
    await userSchema
      .create({ username, cryptPassword, date })
      .then((userSaved) => {
        res.locals.user = userSaved;
        return next();
      });
  } catch (err) {
    return next({
      log: `userController.createUser: ERROR: ${err}`,
      message: {
        err: "Error occurred in userController.createUser - Check server logs for more details.",
      },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body.userInfo;
    // Checking if the user already exists
    await userSchema.findOne({ username }).then((result) => {
      // if document (user) was found,
      if (result) {
        // Will need to use bcrypt.compare once bcrypt is setup
        bcrypt.compare(password, result.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
          if (isMatch) {
            console.log("Password passes BCRYPT check, all good.");
            res.locals.auth = {
              message: "Password Authenticated",
              verified: true,
            };
            return next();
          } else {
            console.log("Passwords do not match, fam.");
            res.locals.err = "Password Incorrect";
            return next();
          }
        });
      } else {
        // if document was NOT found
        res.locals.err = "User not found";
        return next();
      }
    });
  } catch (err) {
    return next({
      log: `userController.verifyUser: ERROR: ${err}`,
      message: {
        err: "Error occurred in userController.verifyUser - Check server logs for more details.",
      },
    });
  }
};

module.exports = userController;
