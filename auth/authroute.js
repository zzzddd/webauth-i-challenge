const express = require("express");
const bc = require("bcrypt");

const Users = require("../users/usermodule");

const router = express.Router()

// POST /api/auth/register Endpoi
router.post("/register", (req, res) => {
  const user = req.body;
console.log("users...",req.body)
  if
   (user.username && user.password) {
    const hash = bc.hashSync(user.password, 8);

    user.password = hash;

    Users.add(user)
      .then(saved => {
     
        res.status(201).json(saved);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } 
  else {
    res
      .status(400)
      .json({ message: "Please provide registration information" });
  }
});

// POST /api/auth/login Endpoint
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
   

          res
            .status(200)
            .json({ message: `Welcome, ${user.username}! You're logged in!` });
        } else {
          res.status(401).json({ message: "You shall not pass!" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } else {
    res.status(400).json({ message: "Please provide credentials" });
  }
});



module.exports = router;
