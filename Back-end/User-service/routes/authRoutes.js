const express = require("express");
const { LoginWithPassword } = require("../controllers/loginController");
const router = express.Router();

router.post("/login", LoginWithPassword);

module.exports = router;
