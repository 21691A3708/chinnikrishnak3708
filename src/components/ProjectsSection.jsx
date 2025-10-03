import React from "react";
import SectionTitle from "./SectionTitle";
// import Erp from "../assets/Erp.jpg";
import Erp from "../assets/Erp 2.webp";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning (2025) [R & D]",
      description:
        "Developed a full stack ERP system with Assembly, Rework Assembly, QC Reports, Sticky Pads. Designed RESTful APIs with Node.js/Express.js, optimized MongoDB using indexing & validation, and built a responsive React.js front-end for seamless user experience.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: Erp,
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#eef2f6" }}>
      <div className="container">
        <SectionTitle title="Project Work" />

        <div className="row g-4 mt-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card border-0 shadow-lg overflow-hidden"
      style={{
        borderRadius: "20px",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
      {/* Optional Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}

      <div className="card-body">
        {/* Title */}
        <h5
          style={{ color: "#0D47A1", fontWeight: 700, marginBottom: "0.5rem" }}>
          {project.title}
        </h5>

        {/* Description */}
        <p
          style={{
            color: "#1e293b",
            fontSize: "0.95rem",
            marginBottom: "1rem",
          }}>
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="d-flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#FFD54F",
                color: "#0D47A1",
                padding: "0.3rem 0.8rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
