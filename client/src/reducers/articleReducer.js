const articleActions = {
  GET_ARTICLE: "GET_ARTICLE",
  GET_ARTICLES: "GET_ARTICLES",
  POST_ARTICLE: "SET_ARTICLE",
  DELETE_ARTICLE: "DELETE_ARTICLE",
  UPDATE_ARTICLE: "UPDATE_ARTICLE",
  LIKE_ARTICLE: "LIKE_ARTICLE",
  ADD_COMMENT: "ADD_COMMENT",
  UPDATE_COMMENT: "UPDATE_COMMENT",
  DELETE_COMMENT: "DELETE_COMMENT",
  ADD_COMMENT_TO_COMMENT: "ADD_COMMENT_TO_COMMENT",
  UPDATE_COMMENT_TO_COMMENT: "UPDATE_COMMENT_TO_COMMENT",
  DELETE_COMMENT_TO_COMMENT: "DELETE_COMMENT_TO_COMMENT",
  LIKE_COMMENT_TO_COMMENT: "LIKE_COMMENT_TO_COMMENT",
  LIKE_COMMENT: "LIKE_COMMENT",
};

const articleReducer = (state, { type, payload }) => {
  switch (type) {
    case articleActions.GET_ARTICLES: {
      return payload;
    }
    case articleActions.POST_ARTICLE: {
      return [...state, payload];
    }
    case articleActions.DELETE_ARTICLE: {
      const newState = state.filter((id) => state.id !== id);
      return newState;
    }
    case articleActions.UPDATE_ARTICLE: {
      const { id, post } = payload;
      const newState = state.map((article) =>
        article.id === id ? post : article
      );
      return newState;
    }
    case articleActions.LIKE_ARTICLE: {
      const { id, userId } = payload;
      const newState = state.map((article) => {
        if (article._id === id) {
          if (article.likedBy.includes(userId)) {
            //dislike
            return {
              ...article,
              likes: article.likes - 1,
              likedBy: article.likedBy.filter((author) => author !== userId),
            };
          } else {
            //like
            return {
              ...article,
              likes: article.likes + 1,
              likedBy: article.likedBy.concat([userId]),
            };
          }
        }
        return article;
      });
      console.log({ likes: newState[0].likes, likedBy: newState[0].likedBy });
      return newState;
    }
    case articleActions.LIKE_COMMENT: {
      const { id, commentId, userId } = payload;
      const newState = state.map((article) => {
        if (article._id === id) {
          return {
            ...article,
            comments: article.comments.map((comment) => {
              if (comment._id === commentId) {
                if (comment.likedBy.includes(userId)) {
                  // Unlike
                  return {
                    ...comment,
                    likes: comment.likes - 1,
                    likedBy: comment.likedBy.filter(
                      (author) => author !== userId
                    ),
                  };
                } else {
                  // Like
                  return {
                    ...comment,
                    likes: comment.likes + 1,
                    likedBy: comment.likedBy.concat([userId]),
                  };
                }
              }
              return comment;
            }),
          };
        }
        return article;
      });
      return newState;
    }

    case articleActions.ADD_COMMENT: {
      const { comments } = payload;
      const newState = state.map((article) =>
        article.id === payload.id ? { ...article, comments } : article
      );
      return newState;
    }

    case articleActions.UPDATE_COMMENT: {
      const { comments } = payload;
      const newState = state.map((article) =>
        article.id === payload.id ? { ...article, comments } : article
      );
      return newState;
    }

    case articleActions.DELETE_COMMENT: {
      const { comments } = payload;
      const newState = state.map((article) =>
        article.id === payload.id ? { ...article, comments } : article
      );
      return newState;
    }
    // New cases for nested comments
    case articleActions.ADD_COMMENT_TO_COMMENT: {
      const newState = state.map((article) => {
        if (article.id === payload.id) {
          return payload
        }
        return article;
      });
      return newState;
    }

    case articleActions.UPDATE_COMMENT_TO_COMMENT: {
      const { comments } = payload;
      const newState = state.map((article) => {
        if (article.id === payload.id) {
          return {
            ...article,
            comments: article.comments.map((comment) => {
              if (comment._id === payload.commentId) {
                return {
                  ...comment,
                  comments: comment.comments.map((nestedComment) => {
                    if (nestedComment._id === payload.nestedCommentId) {
                      return payload.updatedNestedComment;
                    }
                    return nestedComment;
                  }),
                };
              }
              return comment;
            }),
          };
        }
        return article;
      });
      return newState;
    }

    case articleActions.DELETE_COMMENT_TO_COMMENT: {
      const newState = state.map((article) => {
        if (article.id === payload.id) {
          return {
            ...article,
            comments: article.comments.map((comment) => {
              if (comment._id === payload.commentId) {
                return {
                  ...comment,
                  comments: comment.comments.filter(
                    (nestedComment) =>
                      nestedComment._id !== payload.nestedCommentId
                  ),
                };
              }
              return comment;
            }),
          };
        }
        return article;
      });
      return newState;
    }

    case articleActions.LIKE_COMMENT_TO_COMMENT: {
      const { id, commentId, nestedCommentId, userId } = payload;
      const newState = state.map((article) => {
        if (article._id === id) {
          return {
            ...article,
            comments: article.comments.map((comment) => {
              if (comment._id === commentId) {
                return {
                  ...comment,
                  comments: comment.comments.map((nestedComment) => {
                    if (nestedComment._id === nestedCommentId) {
                      if (nestedComment.likedBy.includes(userId)) {
                        return {
                          ...nestedComment,
                          likes: nestedComment.likes - 1,
                          likedBy: nestedComment.likedBy.filter(
                            (author) => author !== userId
                          ),
                        };
                      } else {
                        return {
                          ...nestedComment,
                          likes: nestedComment.likes + 1,
                          likedBy: nestedComment.likedBy.concat([userId]),
                        };
                      }
                    }
                    return nestedComment;
                  }),
                };
              }
              return comment;
            }),
          };
        }
        return article;
      });
      return newState;
    }
    default:
      return state;
  }
};

export { articleActions, articleReducer };
