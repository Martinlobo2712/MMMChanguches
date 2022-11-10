const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt')

const path = '/user';
// get


// get:id


// post 
router.post(path, (err, req, res) => {
  if (err) {
    console.error(`Error: ${err} signing up new user`);
    res.status(500).send('Server error, try again later!');
  }

  const user = new User({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password
  });

  user.save(err => {
    if (err) throw err;
    res.status(201).json(user);
  })
})

module.exports = router;