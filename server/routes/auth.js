// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

// Route for user sign-up
router.post("/signup", authController.signup);

// Route for user login
router.post("/login", authController.login);

router.post("/username_exists", authController.usernameExists);

module.exports = router;
