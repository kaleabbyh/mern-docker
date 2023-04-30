const mongoose = require("mongoose");
const User = require("../models/usermodel");

const addNewContact = async (req, res) => {
  let newUser = new User(req.body);

  await newUser.save();

  if (newUser) {
    res.json(newUser);
  } else {
    res.send("user register failed");
  }
};

module.exports = {
  addNewContact,
};
