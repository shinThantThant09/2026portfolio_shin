import React, { useEffect, useState } from "react";
import "../stylingpages/ScrollArrows.css";

// Same section ids as the navbar, from top to bottom
const SECTION_IDS = ["about", "projects", "contact"];

function ScrollArrow() {
  // "down" near the top of the page, "up" once you scroll further
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const updateDirection = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      const pastHalfScreen = window.scrollY > window.innerHeight * 0.5;

      setDirection(atBottom || pastHalfScreen ? "up" : "down");
    };

    updateDirection();
    window.addEventListener("scroll", updateDirection, { passive: true });
    window.addEventListener("resize", updateDirection);

    return () => {
      window.removeEventListener("scroll", updateDirection);
      window.removeEventListener("resize", updateDirection);
    };
  }, []);

  const handleClick = () => {
    if (direction === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Go to the next section below the current screen
    const nextSection = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).find((section) => section && section.getBoundingClientRect().top > 10);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`scroll-arrow scroll-arrow-${direction}`}
      onClick={handleClick}
      aria-label={direction === "up" ? "Scroll to top" : "Scroll down"}
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="6 13 12 19 18 13" />
      </svg>
    </button>
  );
}

export default ScrollArrow;
