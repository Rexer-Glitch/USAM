const express = require("express");
const {
  getArticle,
  getArticles,
  deleteArticle,
  updateArticle,
  postArticle,
} = require("../controllers/article");
const isAuthenticated = require("../middleware/isAuth");

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticle);
router.delete("/:id", deleteArticle);
router.put("/:id", isAuthenticated, updateArticle);
router.post("/", isAuthenticated, postArticle);

module.exports = router;
