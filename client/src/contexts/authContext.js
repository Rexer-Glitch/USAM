import React, { createContext, useReducer } from "react";
import { authActions, authReducer } from "../reducers/authReducer";
import AuthenticationServices from "../services/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    accessToken: null,
  });

  const Login = async (email, password) => {
    const response = await AuthenticationServices.SignIn(email, password);
    console.log(response);
    if (response && response.user) {
      dispatch({ type: authActions.SIGN_IN, payload: response });
      return true;
    }

    return response.message;
  };

  const Logout = async () => {
    const response = await AuthenticationServices.SignOut(auth.accessToken);
    if (response) {
      dispatch({ type: authActions.SIGN_OUT });
      return;
    }
    return false;
  };

  const Signup = async (username, email, password) => {
    const response = await AuthenticationServices.SignUp(
      username,
      email,
      password
    );
    if (response && response.accessToken) {
      dispatch({ type: authActions.SIGN_UP, payload: response });
      return true;
    }
    return response.message;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth.isAuthenticated,
        accessToken: auth.accessToken,
        user: auth.user,
        Login,
        Logout,
        Signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
