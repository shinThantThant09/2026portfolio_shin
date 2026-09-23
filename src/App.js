import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutMe from "./pages/AboutMe";
import ProjectsDetail from "./pages/ProjectsDetail";
import "./App.css";

function Layout() {
  return (
    <div className="app-container">
      {/* Blob background layer */}
      <div className="blob-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navbar shows on every page now, because the cover page is removed */}
      <Navbar />

      {/* nesting that control the page navigation and url starts here*/}
      <main className="main-content">
        <Routes>
          {/* The first page people see: send "/" to About */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/:id" element={<ProjectsDetail />} />
          {/* Any unknown page also goes to About */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
