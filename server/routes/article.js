import express from "express";
import {
  getArticle,
  getArticles,
  deleteArticle,
  updateArticle,
  postArticle,
  isLiked,
  likeArticle,
  addComment,
  likeComment,
  updateComment,
  deleteComment,
  addCommentToComment,
  updateCommentToComment,
  deleteCommentToComment,
  likeCommentToComment,
} from "../controllers/article.js";
import isAuthenticated from "../middleware/isAuth.js";

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticle);
router.delete("/:id", deleteArticle);
router.put("/:id", isAuthenticated, updateArticle);
router.post("/", isAuthenticated, postArticle);

// New routes for likes and comments
router.get("/:id/isLiked", isAuthenticated, isLiked);
router.put("/:id/like", isAuthenticated, likeArticle);
router.post("/:id/comments", isAuthenticated, addComment);
router.put("/:id/comments/:commentId", isAuthenticated, updateComment);
router.put("/:id/comments/:commentId/like", isAuthenticated, likeComment);
router.delete("/:id/comments/:commentId", isAuthenticated, deleteComment);

// New routes for nested comments
router.post(
  "/:id/comments/:commentId/comments",
  isAuthenticated,
  addCommentToComment
);
router.put(
  "/:id/comments/:commentId/comments/:nestedCommentId",
  isAuthenticated,
  updateCommentToComment
);
router.delete(
  "/:id/comments/:commentId/comments/:nestedCommentId",
  isAuthenticated,
  deleteCommentToComment
);
router.put(
  "/:id/comments/:commentId/comments/:nestedCommentId/like",
  isAuthenticated,
  likeCommentToComment
);

export default router;
