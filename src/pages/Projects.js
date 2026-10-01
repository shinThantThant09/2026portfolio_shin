import React from "react";
import projects from "../data/projectsArray";
import "../stylingpages/Projects.css";

// Soft colour mat behind each project image, like a frame in a gallery
const matById = {
  inscope: "#D9E3DC",
  pawth: "#EEDFD1",
  chemtrails: "#DDE3E9",
  "furis-pet": "#E7E4D2",
  "BrowseAI-BrandBook": "#EADDE0",
};

const visualById = {
  inscope: "mockup",
  chemtrails: "phone",
  "furis-pet": "document",
  "BrowseAI-BrandBook": "document",
};

function PhoneMockup({ image }) {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div
          className="phone-screen"
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
        <div className="phone-home-bar"></div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }) {
  const visual = visualById[project.id] || "screenshot";
  const mat = matById[project.id] || "#EEE6DA";

  return (
    <div className="project-mat" style={{ backgroundColor: mat }}>
      {visual === "phone" ? (
        <PhoneMockup image={project.image} />
      ) : project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={`project-img project-img-${visual}`}
        />
      ) : (
        <span className="project-img-empty">Image coming soon</span>
      )}
    </div>
  );
}

function ProjectButtons({ project }) {
  return (
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
      {project.figmaPresentation && (
        <a
          href={project.figmaPresentation}
          target="_blank"
          rel="noreferrer"
          className="card-btn"
        >
          View the presentation demo →
        </a>
      )}
      {project.download && (
        <a href={project.download} download className="card-btn">
          Download →
        </a>
      )}
    </div>
  );
}

// Tools as one quiet line of text, e.g. "Figma · UX Research · Wireframing"
function ProjectTools({ tools }) {
  if (!tools || tools.length === 0) return null;

  return (
    <p className="project-tools">
      <span className="project-label">Tools:</span>
      <span className="project-tools-text">{tools.join(" · ")}</span>
    </p>
  );
}

//My role as highlighted boxes. The text splits at each comma.
function ProjectRole({ role, color }) {
  if (!role) return null;

  const roles = role
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="project-role">
      <span className="project-label">My role</span>
      <ul className="project-role-list">
        {roles.map((item) => (
          <li
            key={item}
            className="project-role-tag"
            style={{ backgroundColor: color || "#EEE6DA" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Description can be one string or a list of short paragraphs.
function ProjectSummary({ text }) {
  if (!text) return null;
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <div className="project-summary-wrap">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="project-summary">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ProjectText({ project }) {
  return (
    <div className="project-text">
      <p className="project-category">{project.category}</p>
      <h3 className="project-title">{project.title}</h3>
      <ProjectTools tools={project.techStack} />
      <ProjectRole role={project.role} color={project.color} />
      <ProjectSummary text={project.summary || project.description} />
      <ProjectButtons project={project} />
    </div>
  );
}

function Projects() {
  // The first project in the list becomes the big featured one
  const [featured, ...rest] = projects;

  return (
    <div className="work">
      <div className="work-inner">
        <header className="work-header">
          <h2 className="work-title">Selected work</h2>
          <p className="work-sub">A mix of research, design and code</p>
        </header>

        <article className="work-featured">
          <ProjectVisual project={featured} />
          <ProjectText project={featured} />
        </article>

        <div className="work-grid">
          {rest.map((project) => (
            <article className="work-card" key={project.id}>
              <ProjectVisual project={project} />
              <ProjectText project={project} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
