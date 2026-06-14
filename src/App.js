import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ProjectsDetail from "./pages/ProjectsDetail";
import "./App.css";

function Layout() {
  const location = useLocation();
  return (
    <div className="app-container">
      {/* Blob background layer */}
      <div className="blob-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Hide navbar on home page */}
      {location.pathname !== "/" && <Navbar />}
      {/*needs to know which page we are on because we are hiding top nav bar on home page*/}
      {/* short circuit evaluation-> In JavaScript, && means "AND".
          If the left side is true → evaluate and return the right side
          If the left side is false → stop, return nothing*/}
      {/* nesting that control the page navigation and url starts here*/}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/:id" element={<ProjectsDetail />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
