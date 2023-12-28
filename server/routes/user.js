import  { profile } from "../controllers/user.js";
import isAuthenticated  from "../middleware/isAuth.js";

import express from "express";
const router = express.Router();

router.get("/profile", isAuthenticated, profile);

export default router;
