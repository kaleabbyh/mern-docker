const express = require("express");
const router = express.Router();
const { addNewContact } = require("../controllers/usercontroller");

router.post("/register", addNewContact);

module.exports = router;
