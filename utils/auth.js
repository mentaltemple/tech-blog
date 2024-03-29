const session = require("express-session");

const withAuth = (req, res, next) => {
  // If the user hasn't logged in, this will redirect them to login
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
