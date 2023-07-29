import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";

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
      <Route path="/account/sign_up" element={<UnderConstruction />} />
      <Route path="/account/sign_in" element={<Login />} />
      <Route path="/account/forgot_password" element={<UnderConstruction />} />
      <Route path="/terms_and_conditions" element={<UnderConstruction />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
