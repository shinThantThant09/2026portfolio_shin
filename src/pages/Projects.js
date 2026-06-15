import React from "react";
import projects from "../data/projectsArray";
import "../stylingpages/Projects.css";

function PhoneMockup({ image }) {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div
          className="phone-screen"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
        <div className="phone-home-bar"></div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-inner">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-sub">a collection of things I've built ✦</p>
        <div className="pegboard">
          <div
            className="deco-star"
            style={{ top: "14px", left: "18px", fontSize: "16px" }}
          >
            ✦
          </div>
          <div
            className="deco-star"
            style={{
              top: "20px",
              right: "22px",
              fontSize: "10px",
              color: "#edfdb6",
            }}
          >
            ✦
          </div>
          <div
            className="deco-star"
            style={{ bottom: "18px", left: "30px", fontSize: "8px" }}
          >
            ✦
          </div>
          <div
            className="deco-star"
            style={{
              bottom: "24px",
              right: "18px",
              fontSize: "12px",
              color: "#c4a882",
            }}
          >
            ✦
          </div>
          <div
            className="deco-tape"
            style={{
              top: "18px",
              left: "60px",
              width: "44px",
              background: "#edfdb6",
              transform: "rotate(-8deg)",
            }}
          ></div>
          <div
            className="deco-tape"
            style={{
              bottom: "20px",
              right: "60px",
              width: "36px",
              background: "#feb9b7",
              transform: "rotate(5deg)",
            }}
          ></div>

          <div className="cards-grid">
            {projects.map((project, index) => {
              const rotations = [-3, 1.5, -1.5, 2];
              const washiColors = ["#feb9b7", "#c8e6a0", "#c4a882", "#a8d5b5"];
              const thumbColors = ["#fffef8", "#fffef8", "#fffef8", "#fffef8"];

              const isDocument =
                project.id === "furis-pet" ||
                project.id === "BrowseAI-BrandBook";
              const isPhone = project.id === "chemtrails";

              return (
                <div
                  key={project.id}
                  className="card-wrap"
                  style={{ transform: `rotate(${rotations[index % 4]}deg)` }}
                >
                  <div
                    className="washi"
                    style={{ background: washiColors[index % 4] }}
                  >
                    <div className="washi-stripe"></div>
                  </div>

                  <div className="project-card">
                    {isPhone ? (
                      <div className="card-thumb card-thumb-phone">
                        <PhoneMockup image={project.image} />
                      </div>
                    ) : (
                      <div
                        className="card-thumb"
                        style={{
                          backgroundImage: project.image
                            ? `url(${project.image})`
                            : "none",
                          backgroundColor: !project.image
                            ? thumbColors[index % 4]
                            : isDocument
                              ? "#fffef8"
                              : "transparent",
                          backgroundSize: isDocument ? "75%" : "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {!project.image && (
                          <span style={{ opacity: 0.5 }}>
                            screenshot coming soon
                          </span>
                        )}
                      </div>
                    )}

                    <div className="card-body">
                      <div className="card-category">{project.category}</div>
                      <div className="card-title">{project.title}</div>
                      <div className="card-desc">{project.description}</div>
                      <div className="card-tags">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="card-buttons">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn"
                          >
                            Watch Demo →
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn-outline"
                          >
                            GitHub →
                          </a>
                        )}
                        {project.figma && (
                          <a
                            href={project.figma}
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn-outline"
                          >
                            View on Figma →
                          </a>
                        )}
                        {project.download && (
                          <a
                            href={project.download}
                            download
                            className="card-btn"
                          >
                            Download →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
