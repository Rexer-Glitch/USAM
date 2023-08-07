const { profile } = require("../controllers/user");
const isAuthenticated = require("../middleware/isAuth");

const express = require("express");
const router = express.Router();

router.get("/profile", isAuthenticated, profile);

module.exports = router;
