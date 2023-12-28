const BASE_URL = "/articles/";

class Articles {
  static async getArticles() {
    try {
      const response = await fetch(`${BASE_URL}`);
      const articles = await response.json();
      return articles;
    } catch (error) {
      console.log(`Error fetching articles`, error);
      return [];
    }
  }

  static async getArticleById(id) {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const article = await response.json();
      if (response.ok) {
        return article;
      }
      return { message: "Unable to retrieve article" };
    } catch (error) {
      console.log(`Error fetching article`, error);
      return { message: "Error fetching article", error: error };
    }
  }

  static async postArticle(article, token) {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(article),
      });
      const newArticle = await response.json();
      return newArticle;
    } catch (error) {
      console.log(`Error posting article`, error);
      return {};
    }
  }

  static async putArticle(id, article) {
    try {
      const response = await fetch(`${BASE_URL}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });
      const updatedArticle = await response.json();
      return updatedArticle;
    } catch (error) {
      console.log(`Error updating article`, error);
      return {};
    }
  }

  static async deleteArticle(id) {
    try {
      const response = await fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
      });
      const deletedArticle = await response.json();
      return deletedArticle;
    } catch (error) {
      console.log(`Error deleting article`, error);
      return {};
    }
  }

  static async likeArticle(id, token) {
    try {
      const response = await fetch(`${BASE_URL}${id}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      const likedArticle = await response.json();
      return likedArticle;
    } catch (error) {
      console.log(`Error liking article`, error);
      return {};
    }
  }

  static async likeComment(id, commentId, accessToken) {
    try {
      const response = await fetch(
        `${BASE_URL}${id}/comments/${commentId}/like`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          },
        }
      );
      const likedArticle = await response.json();
      return likedArticle;
    } catch (error) {
      console.log(`Error liking comment`, error);
      return {};
    }
  }

  static async addComment(id, comment, accessToken) {
    try {
      const response = await fetch(`${BASE_URL}${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        body: JSON.stringify(comment),
      });
      const articleWithNewComment = await response.json();
      return articleWithNewComment;
    } catch (error) {
      console.log(`Error adding comment`, error);
      return {};
    }
  }

  static async updateComment(id, commentId, comment) {
    try {
      const response = await fetch(`${BASE_URL}${id}/comments/${commentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      const articleWithUpdatedComment = await response.json();
      return articleWithUpdatedComment;
    } catch (error) {
      console.log(`Error updating comment`, error);
      return {};
    }
  }

  static async deleteComment(id, commentId) {
    try {
      const response = await fetch(`${BASE_URL}${id}/comments/${commentId}`, {
        method: "DELETE",
      });
      const articleWithDeletedComment = await response.json();
      return articleWithDeletedComment;
    } catch (error) {
      console.log(`Error deleting comment`, error);
      return {};
    }
  }

  static async addCommentToComment(id, commentId, newComment, accessToken) {
    try {
      const response = await fetch(
        `${BASE_URL}${id}/comments/${commentId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          },
          body: JSON.stringify(newComment),
        }
      );
      const articleWithNewNestedComment = await response.json();
      return articleWithNewNestedComment;
    } catch (error) {
      console.log(`Error adding comment to comment`, error);
      return {};
    }
  }

  static async deleteCommentToComment(
    id,
    commentId,
    nestedCommentId,
    accessToken
  ) {
    try {
      const response = await fetch(
        `${BASE_URL}${id}/comments/${commentId}/comments/${nestedCommentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
      const articleWithDeletedNestedComment = await response.json();
      return articleWithDeletedNestedComment;
    } catch (error) {
      console.log(`Error deleting comment to comment`, error);
      return {};
    }
  }

  static async updateCommentToComment(
    id,
    commentId,
    nestedCommentId,
    updatedComment,
    accessToken
  ) {
    try {
      const response = await fetch(
        `${BASE_URL}${id}/comments/${commentId}/comments/${nestedCommentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          },
          body: JSON.stringify(updatedComment),
        }
      );
      const articleWithUpdatedNestedComment = await response.json();
      return articleWithUpdatedNestedComment;
    } catch (error) {
      console.log(`Error updating comment to comment`, error);
      return {};
    }
  }
}

export default Articles;
