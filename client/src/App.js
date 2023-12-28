import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";
import Feed from "./components/Dashboard/content";
import ViewArticle from "./components/Dashboard/viewArticle";
import Loading from "./pages/loading";

const Home = React.lazy(()=> import("./pages/home"));
const Login = React.lazy(()=> import("./pages/login"));
const SignUp = React.lazy(()=> import("./pages/signup"));
const Dashboard = React.lazy(()=> import("./pages/dashboard"));
const Membership = React.lazy(()=> import("./pages/membership"));
const About = React.lazy(()=> import("./pages/about"));
const Payment = React.lazy(()=> import("./pages/payment"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
      <Route path="/about_us" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
      <Route path="/contact_us" element={<UnderConstruction />} />
      <Route path="/donate" element={<Suspense fallback={<Loading />}><Payment/></Suspense>} />
      <Route path="/membership" element={<Suspense fallback={<Loading />}><Membership /></Suspense>} />
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
      <Route path="/signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
      <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
      <Route path="/account/forgot_password" element={<UnderConstruction />} />
      <Route path="/dashboard">
        <Route path="" element={<Suspense fallback={<Loading />}><Dashboard content={Feed} /></Suspense> } />
        <Route
          path="posts/:postID"
          element={<Suspense fallback={<Loading />}><Dashboard content={ViewArticle} /></Suspense>}
        />
      </Route>
      <Route path="/terms_and_conditions" element={<UnderConstruction />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/loading" element={<Loading/>} />
    </Routes>
  );
}

export default App;
