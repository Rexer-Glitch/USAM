import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Common/protectedRoute";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";
import Dashboard from "./pages/dashboard";
import Feed from "./components/Dashboard/content";
import ViewArticle from "./components/Dashboard/viewArticle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<UnderConstruction />} />
      <Route path="/contact_us" element={<UnderConstruction />} />
      <Route path="/donate" element={<UnderConstruction />} />
      <Route path="/membership" element={<UnderConstruction />} />
      <Route path="/get_involved" element={<UnderConstruction />} />
      <Route path="/blog" element={<UnderConstruction />} />
      <Route path="/resources" element={<UnderConstruction />} />
      <Route path="/blog/all" element={<UnderConstruction />} />
      <Route path="/blog/:id" element={<UnderConstruction />} />
      <Route path="/events" element={<UnderConstruction />} />
      <Route path="/account" element={<UnderConstruction />} />
      <Route path="/account/profile" element={<UnderConstruction />} />
      <Route path="/account/messages" element={<UnderConstruction />} />
      <Route path="/account/saved" element={<UnderConstruction />} />
      <Route path="/account/discover" element={<UnderConstruction />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account/forgot_password" element={<UnderConstruction />} />
      <Route path="/dashboard">
        <Route path="" element={<Dashboard content={Feed} />} />
        <Route
          path="posts/:postID"
          element={<Dashboard content={ViewArticle} />}
        />
      </Route>
      <Route path="/terms_and_conditions" element={<UnderConstruction />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
