// routes/authRoutes.js
import express from "express";
import {signup, login, usernameExists} from "../controllers/auth.js";

const router = express.Router();

// Route for user sign-up
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

router.post("/username_exists", usernameExists);

export default router;
