import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylingpages/navbar.css";

function Navbar() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          SHIN
        </Link>
        <div className="navbar-links">
          <Link
            to="/about"
            className={`nav-pill ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => setTimeout(() => scrollToSection("about"), 100)}
          >
            About Me
          </Link>
          <Link
            to="/about"
            className="nav-pill"
            onClick={() => setTimeout(() => scrollToSection("projects"), 100)}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="nav-pill"
            onClick={() => setTimeout(() => scrollToSection("contact"), 100)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
