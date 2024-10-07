const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

router.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/about");
  }
);

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if(err) { return next(err); }
    res.redirect("/");
  });
});

router.post("/register", (req, res) => {
    User.register({username: req.body.username}, req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/login");
        });
      }
    });
});

router.post("/login", (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    req.login(user, (err) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/about");
        });
      }
    });
});

module.exports = router;
