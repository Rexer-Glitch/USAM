const articleActions = {
  GET_ARTICLE: "GET_ARTICLE",
  GET_ARTICLES: "GET_ARTICLES",
  POST_ARTICLE: "SET_ARTICLE",
  DELETE_ARTICLE: "DELETE_ARTICLE",
  UPDATE_ARTICLE: "UPDATE_ARTICLE",
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
    default:
      return state;
  }
};

export { articleActions, articleReducer };
