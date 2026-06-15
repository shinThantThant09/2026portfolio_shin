import React from "react";
import "../stylingpages/AboutMe.css";
import profilePic from "../assets/myProfile.JPG";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function AboutMe() {
  return (
    <div className="about-page">
      {/* About Me Section */}
      <section id="about" className="about-wrapper">
        <div className="about-content">
          {/* Left side - text */}
          <div className="about-text">
            <h1 className="about-name">Shin Thant Thant</h1>
            <p className="about-role">UI/UX Designer | Full-stack Developer</p>
            <p className="about-bio">
              I am a third-year student at Simon Fraser University's School of
              Interactive Arts and Technology. I love turning my creative vision
              into real, inclusive and intuitive digital experiences through
              both design and programming.
            </p>

            {/* Two column skills section */}
            <div className="about-skills-grid">
              <div className="about-skills-col">
                <p className="about-skills-title">Skills</p>
                <ul className="about-skills-list">
                  <li>C++</li>
                  <li>Java / Javascript</li>
                  <li>Python</li>
                  <li>React/ React Native</li>
                  <li>Node.js /Express</li>
                </ul>
              </div>
              <div className="about-skills-col">
                <p className="about-skills-title">Tools</p>
                <ul className="about-skills-list">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>MongoDB / Firebase</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>
            </div>

            {/* Download buttons */}
            <div className="about-buttons">
              <a
                href="/Resume_ShinThantThant.pdf"
                download
                className="about-btn"
              >
                Download Resume
              </a>
              <a
                href="/CoverLetter_ShinThantThant.pdf"
                download
                className="about-btn"
              >
                Download Cover Letter
              </a>
            </div>
          </div>

          {/* Right side - photo */}
          <div className="about-image">
            <img src={profilePic} alt="Shin Thant Thant" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default AboutMe;
