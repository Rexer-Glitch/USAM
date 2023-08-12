import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { UserContextProvider } from "./contexts/userContext";
import { ArticleContextProvider } from "./contexts/articleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserContextProvider>
        <ArticleContextProvider>
          <App />
        </ArticleContextProvider>
      </UserContextProvider>
    </AuthProvider>
  </BrowserRouter>
);
