const bcrypt = require("bcryptjs");


const userdata = [
  { username: "John", password: bcrypt.hashSync("pass", 8) },
  { username: "Paul", password: bcrypt.hashSync("pass", 8) },
  { username: "George", password: bcrypt.hashSync("pass", 8) },
  { username: "Ringo", password: bcrypt.hashSync("pass", 8) }
];


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert(userdata);
    });
};
