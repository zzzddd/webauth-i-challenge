const express = require("express");
const auten=require("../auth/authmiddle")
const Users = require("./usermodule");


const router = express.Router();

// GET /api/users Endpoint
router.get("/",auten, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
