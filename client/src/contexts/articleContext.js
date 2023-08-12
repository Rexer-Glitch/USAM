import React, { createContext, useReducer } from "react";
import { articleReducer, articleActions } from "../reducers/articleReducer";
import Articles from "../services/articles";
import { AuthContext } from "./authContext";
import { useContext } from "react";

const ArticleContext = createContext();

const ArticleContextProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(articleReducer, []);
  const { accessToken } = useContext(AuthContext);

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
    if (article !== {}) {
      dispatch({
        type: articleActions.DELETE_ARTICLE,
        payload: id,
      });
    }
  };

  const updateArticle = async (id, article) => {
    const post = await Articles.putArticle(id, article);
    if (post !== {}) {
      dispatch({
        type: articleActions.UPDATE_ARTICLE,
        payload: { id, post },
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
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContextProvider, ArticleContext };
