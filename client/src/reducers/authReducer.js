const authActions = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case authActions.SIGN_IN: {
      const { user, accessToken } = payload;
      return { user, accessToken, isAuthenticated: true };
    }
    case authActions.SIGN_UP: {
      const { user, accessToken } = payload;
      return { user, accessToken, isAuthenticated: true };
    }
    case authActions.SIGN_OUT: {
      return { user: null, accessToken: null, isAuthenticated: false };
    }
    default:
      return state;
  }
};

export { authActions, authReducer };
