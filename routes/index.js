const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("about");
  } else {
    res.redirect("/login");
  }
});

router.get("/equipment", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("equipment");
  } else {
    res.redirect("/login");
  }
});

router.get("/booking", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("booking");
  } else {
    res.redirect("/login");
  }
});

router.get("/contact", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("contact");
  } else {
    res.redirect("/login");
  }
});

router.get("/payment", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("payment");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
