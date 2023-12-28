import React, { createContext, useReducer } from "react";
import { articleReducer, articleActions } from "../reducers/articleReducer";
import Articles from "../services/articles";
import { AuthContext } from "./authContext";
import { useContext } from "react";

const ArticleContext = createContext();

const ArticleContextProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(articleReducer, []);
  const { accessToken, user } = useContext(AuthContext);

  const getArticleFromDB = async (id) => {
    return await Articles.getArticleById(id);
  };

  const getArticles = async () => {
    const posts = await Articles.getArticles();

    dispatch({
      type: articleActions.GET_ARTICLES,
      payload: posts,
    });
  };

  const postArticle = async (article) => {
    const post = await Articles.postArticle(article, accessToken);
    console.log(accessToken);
    if (post && post.title) {
      dispatch({
        type: articleActions.POST_ARTICLE,
        payload: post,
      });
      return true;
    }

    return false;
  };

  const deleteArticle = async (id) => {
    const article = await Articles.deleteArticle(id);
    if (JSON.stringify(article) !== "{}") {
      dispatch({
        type: articleActions.DELETE_ARTICLE,
        payload: id,
      });
    }
  };

  const updateArticle = async (id, article) => {
    const post = await Articles.putArticle(id, article);
    if (JSON.stringify(post) !== "{}") {
      dispatch({
        type: articleActions.UPDATE_ARTICLE,
        payload: { id, post },
      });
    }
  };

  const likeArticle = async (id) => {
    dispatch({
      type: articleActions.LIKE_ARTICLE,
      payload: { id, userId: user._id },
    });
    const likedArticle = await Articles.likeArticle(id, accessToken);
    if (JSON.stringify(likedArticle) === "{}") {
      dispatch({
        type: articleActions.LIKE_ARTICLE,
        payload: { id, userId: user._id },
      });
    }
  };

  const likeComment = async (id, commentId) => {
    dispatch({
      type: articleActions.LIKE_COMMENT,
      payload: { id, commentId, userId: user._id },
    });

    const likedArticle = await Articles.likeComment(id, commentId, accessToken);

    if (JSON.stringify(likedArticle) === "{}") {
      dispatch({
        type: articleActions.LIKE_COMMENT,
        payload: { id, commentId, userId: user._id },
      });
    }

    return likedArticle;
  };


  const addComment = async (id, comment) => {
    const articleWithNewComment = await Articles.addComment(
      id,
      comment,
      accessToken
    );
    if (JSON.stringify(articleWithNewComment) !== "{}") {
      dispatch({
        type: articleActions.ADD_COMMENT,
        payload: articleWithNewComment,
      });
    }

    return articleWithNewComment;
  };

  const updateComment = async (id, commentId, comment) => {
    const articleWithUpdatedComment = await Articles.updateComment(
      id,
      commentId,
      comment
    );
    if (JSON.stringify(articleWithUpdatedComment) !== "{}") {
      dispatch({
        type: articleActions.UPDATE_COMMENT,
        payload: articleWithUpdatedComment,
      });
    }
  };

  const deleteComment = async (id, commentId) => {
    const articleWithDeletedComment = await Articles.deleteComment(
      id,
      commentId
    );
    if (JSON.stringify(articleWithDeletedComment) !== "{}") {
      dispatch({
        type: articleActions.DELETE_COMMENT,
        payload: articleWithDeletedComment,
      });
    }
  };

  // New functions for nested comments
  const addCommentToComment = async (id, commentId, comment) => {
    const articleWithNewNestedComment = await Articles.addCommentToComment(
      id,
      commentId,
      comment,
      accessToken
    );

    if (JSON.stringify(articleWithNewNestedComment) !== "{}") {
      dispatch({
        type: articleActions.ADD_COMMENT_TO_COMMENT,
        payload: articleWithNewNestedComment,
      });
    }

    return articleWithNewNestedComment;
  };

  const updateCommentToComment = async (
    id,
    commentId,
    nestedCommentId,
    comment
  ) => {
    const articleWithUpdatedNestedComment =
      await Articles.updateCommentToComment(
        id,
        commentId,
        nestedCommentId,
        comment
      );

    if (JSON.stringify(articleWithUpdatedNestedComment) !== "{}") {
      dispatch({
        type: articleActions.UPDATE_COMMENT_TO_COMMENT,
        payload: articleWithUpdatedNestedComment,
      });
    }
  };

  const deleteCommentToComment = async (id, commentId, nestedCommentId) => {
    const articleWithDeletedNestedComment =
      await Articles.deleteCommentToComment(id, commentId, nestedCommentId);

    if (JSON.stringify(articleWithDeletedNestedComment) !== "{}") {
      dispatch({
        type: articleActions.DELETE_COMMENT_TO_COMMENT,
        payload: articleWithDeletedNestedComment,
      });
    }
  };

  const likeCommentToComment = async (id, commentId, nestedCommentId) => {
    dispatch({
      type: articleActions.LIKE_COMMENT_TO_COMMENT,
      payload: { id, commentId, nestedCommentId, userId: user._id },
    });

    const likedArticle = await Articles.likeCommentToComment(
      id,
      commentId,
      nestedCommentId,
      accessToken
    );

    if (JSON.stringify(likedArticle) === "{}") {
      dispatch({
        type: articleActions.LIKE_COMMENT_TO_COMMENT,
        payload: { id, commentId, nestedCommentId, userId: user._id },
      });
    }
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        getArticleFromDB,
        getArticles,
        postArticle,
        deleteArticle,
        updateArticle,
        likeArticle,
        addComment,
        updateComment,
        deleteComment,
        addCommentToComment,
        updateCommentToComment,
        deleteCommentToComment,
        likeCommentToComment,
        likeComment
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContextProvider, ArticleContext };
