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

  static async likeArticle(id) {
    try {
      const response = await fetch(`${BASE_URL}${id}/like`, {
        method: "PUT",
      });
      const likedArticle = await response.json();
      return likedArticle;
    } catch (error) {
      console.log(`Error liking article`, error);
      return {};
    }
  }
}

export default Articles;
