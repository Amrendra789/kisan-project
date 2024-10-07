// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Adjust the path as per your project structure

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Validate username
  if (!username || username.trim() === '') {
    return res.status(400).send('Username cannot be empty');
  }

  // Check if username already exists
  User.findOne({ username: username }, (err, existingUser) => {
    if (err) {
      console.error("Error checking existing user:", err);
      return res.status(500).send("Error checking existing user");
    }

    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    // Create new user
    const newUser = new User({
      username: username,
      // You might want to hash the password here before saving it
      // For example using bcrypt or a similar library
    });

    newUser.save((err) => {
      if (err) {
        console.error("Error saving new user:", err);
        return res.status(500).send("Error saving new user");
      }

      // Optionally, log in the user or redirect to a success page
      res.redirect('/login');
    });
  });
});

module.exports = router;
