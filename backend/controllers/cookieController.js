const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  // write code here
  try{
  if (res.locals.auth.verified) {
     res.cookie("ssid", req.body.username, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    });
  }
  return next();
}
catch (err) {
    return next({
      log: `userController.verifyUser: ERROR: ${err}`,
      message: {
        err: err.message
      },
    });
  }
};

//   cookieController.validateCookie = (req, res, next) => {
//     console.log('Cookies:', req.cookies);
//   }

  module.exports = cookieController;
