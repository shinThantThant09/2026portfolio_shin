import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylingpages/navbar.css";

function Navbar() {
  const location = useLocation();

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo links back to home page */}
        <Link to="/" className="navbar-logo">
          SHIN
        </Link>

        <div className="navbar-links">
          {/* If on about page, scroll to section. Otherwise navigate to /about with hash */}

          <a
            href="/about#about"
            className={`nav-pill ${location.pathname === "/about" ? "active" : ""}`}
            onClick={(e) => {
              if (location.pathname === "/about") {
                e.preventDefault();
                scrollToSection("about");
              }
            }}
          >
            About Me
          </a>

          <a
            href="/about#projects"
            className="nav-pill"
            onClick={(e) => {
              if (location.pathname === "/about") {
                e.preventDefault();
                scrollToSection("projects");
              }
            }}
          >
            Projects
          </a>

          <a
            href="/about#contact"
            className="nav-pill"
            onClick={(e) => {
              if (location.pathname === "/about") {
                e.preventDefault();
                scrollToSection("contact");
              }
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
