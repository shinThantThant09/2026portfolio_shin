import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylingpages/Home.css";
import pawthImg from "../assets/pawth.jpg";
import chemtrailsImg from "../assets/chemtrails.jpg";
import brandBookImg from "../assets/brandBook.jpg";

function Home() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Left side - text content */}
        <div className="home-left">
          <p className="home-subtitle">Design Portfolio 2026</p>
          <h1 className="home-name">Shin Thant Thant</h1>
          <p className="home-role">UI/UX Designer | Full-stack Developer</p>
          <div className="home-buttons">
            <button
              onClick={() => {
                navigate("/about");
                scrollToSection("about");
              }}
            >
              About Me
            </button>
            <button
              onClick={() => {
                navigate("/about");
                scrollToSection("projects");
              }}
            >
              Projects
            </button>
            <button
              onClick={() => {
                navigate("/about");
                scrollToSection("contact");
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side - desk scene */}
        <div className="home-right">
          {/* Scattered decorations */}
          <div
            className="home-deco-star"
            style={{ top: "10%", left: "5%", fontSize: "1.2rem" }}
          >
            ✦
          </div>
          <div
            className="home-deco-star"
            style={{
              top: "15%",
              right: "8%",
              fontSize: "0.7rem",
              color: "#edfdb6",
            }}
          >
            ✦
          </div>
          <div
            className="home-deco-star"
            style={{ bottom: "20%", left: "8%", fontSize: "0.8rem" }}
          >
            ✦
          </div>
          <div
            className="home-deco-star"
            style={{ top: "30%", right: "3%", fontSize: "1rem" }}
          >
            ✦
          </div>

          <div className="desk-scene">
            {/* Desk surface */}
            <div className="desk-surface"></div>

            {/* Laptop */}
            <div className="laptop-wrap">
              <div className="laptop">
                <div className="laptop-screen-outer">
                  <div className="laptop-camera"></div>
                  <div className="laptop-screen">
                    <div className="screen-grid">
                      <div
                        className="screen-item"
                        style={{
                          gridColumn: "1",
                          gridRow: "1 / span 2",
                          backgroundImage: `url(${chemtrailsImg})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundColor: "#f5ede0",
                        }}
                      />
                      <div
                        className="screen-item"
                        style={{
                          backgroundImage: `url(${pawthImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="screen-item"
                        style={{
                          backgroundImage: `url(${brandBookImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="laptop-base"></div>
                <div className="laptop-bottom"></div>
              </div>
              {/* Laptop stand */}
              <div className="laptop-stand-neck"></div>
              <div className="laptop-stand-foot"></div>
            </div>

            {/* Coffee mug */}
            <div className="mug-wrap">
              <div className="steam-wrap">
                <div className="steam steam-1"></div>
                <div className="steam steam-2"></div>
                <div className="steam steam-3"></div>
              </div>
              <div className="mug">
                <div className="mug-handle"></div>
                <div className="mug-body"></div>
              </div>
            </div>

            {/* Succulent plant */}
            <div className="plant-wrap">
              <div className="plant-leaf plant-leaf-1"></div>
              <div className="plant-leaf plant-leaf-2"></div>
              <div className="plant-leaf plant-leaf-3"></div>
              <div className="plant-soil"></div>
              <div className="plant-pot"></div>
            </div>

            {/* Notebook */}
            <div className="notebook">
              <div className="notebook-spine"></div>
              <div className="notebook-cover"></div>
              <div className="notebook-lines">
                <div className="nb-line"></div>
                <div className="nb-line"></div>
                <div className="nb-line"></div>
              </div>
            </div>

            {/* Pen */}
            <div className="pen">
              <div className="pen-tip"></div>
              <div className="pen-body"></div>
              <div className="pen-cap"></div>
            </div>

            {/* Washi tape roll */}
            <div className="washi-roll">
              <div className="washi-outer">
                <div className="washi-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
