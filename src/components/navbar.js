import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylingpages/navbar.css";

// The sections on the About page, in order from top to bottom
const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
];

function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("about");

  // Scroll spy: watch the scroll position and highlight the section
  // that is currently on screen
  useEffect(() => {
    const onAboutPage =
      location.pathname === "/about" || location.pathname === "/";

    if (!onAboutPage) {
      setActiveSection("");
      return;
    }

    const updateActiveSection = () => {
      // A section counts as "current" once its top passes this line,
      // about one third down the screen
      const line = window.innerHeight * 0.35;
      let current = NAV_ITEMS[0].id;

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= line) {
          current = item.id;
        }
      });

      // The contact section is short, so highlight it once we reach the bottom
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          SHIN
        </Link>
        <div className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to="/about"
              className={`nav-pill ${activeSection === item.id ? "active" : ""}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
