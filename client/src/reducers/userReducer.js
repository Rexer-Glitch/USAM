const userActions = {
  GET_USER: "GET_USER",
  GET_USERS: "GET_USERS",
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
  CREATE_USER: "CREATE_USER",
  UPDATE_USER: "UPDATE_USER",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USER: {
      return state;
    }
    case GET_USERS: {
      return state;
    }
    case SET_USER: {
      return state;
    }
    case DELETE_USER: {
      return state;
    }
    case CREATE_USER: {
      return state;
    }
    case UPDATE_USER: {
      return state;
    }
    default:
      return state;
  }
};

export { userActions, userReducer };
