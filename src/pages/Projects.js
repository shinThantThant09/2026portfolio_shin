import React from "react";
import projects from "../data/projectsArray";
import "../stylingpages/Projects.css";

function Projects() {
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-sub">a collection of things I've built ✦</p>
      <div className="pegboard">
        {/* Scattered decorations */}
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
            const rotations = [-3, 1.5, -1.5];
            const washiColors = [
              "rgba(254,185,183,0.7)",
              "rgba(237,253,182,0.8)",
              "rgba(196,168,130,0.6)",
            ];
            const thumbColors = [
              "rgba(254,185,183,0.25)",
              "rgba(237,253,182,0.3)",
              "rgba(212,232,194,0.3)",
            ];

            const isPortrait = project.id === "chemtrails";

            return (
              <div
                key={project.id}
                className="card-wrap"
                style={{ transform: `rotate(${rotations[index % 3]}deg)` }}
              >
                {/* Washi tape */}
                <div
                  className="washi"
                  style={{ background: washiColors[index % 3] }}
                >
                  <div className="washi-stripe"></div>
                </div>

                <div className="project-card">
                  {/* Thumbnail */}
                  <div
                    className="card-thumb"
                    style={{
                      backgroundImage: project.image
                        ? `url(${project.image})`
                        : "none",
                      backgroundColor: !project.image
                        ? thumbColors[index % 3]
                        : isPortrait
                          ? "#f5ede0"
                          : "transparent",
                      backgroundSize: isPortrait ? "contain" : "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {!project.image && <span>screenshot coming soon</span>}
                  </div>

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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
