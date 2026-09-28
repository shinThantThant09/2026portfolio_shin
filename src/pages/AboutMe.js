import React from "react";
import "../stylingpages/AboutMe.css";
import profilePic from "../assets/myProfile.jpg";
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
            <p className="about-eyebrow">
              Third year at SFU, School of Interactive Arts and Technology
            </p>
            <h1 className="about-name">Shin Thant Thant</h1>
            <p className="about-role">UI/UX Designer | Full-stack Developer</p>
            <p className="about-bio">
              I love turning my creative vision into real, inclusive, and
              intuitive digital experiences through both design and programming.
            </p>
            {/* Skills rows */}
            <dl className="about-skills">
              <div className="about-skills-row">
                <dt>I design with</dt>
                <dd>
                  Figma, Adobe Creative Suite, user research, journey mapping,
                  prototyping
                </dd>
              </div>
              <div className="about-skills-row">
                <dt>I build with</dt>
                <dd>
                  React, React Native, Node.js and Express, MongoDB, Firebase
                </dd>
              </div>
              <div className="about-skills-row">
                <dt>I also code in</dt>
                <dd>JavaScript, Python, Java, C++</dd>
              </div>
            </dl>
            {/* Buttons */}
            <div className="about-buttons">
              <a href="#projects" className="about-btn">
                See my work
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/Resume_ShinThantThant.pdf`}
                download
                className="about-link"
              >
                Download resume
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
