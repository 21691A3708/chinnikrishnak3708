// components/ProjectsSection.jsx
import React from "react";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning (2025)",
      description:
        "Developed a full stack ERP system with Assembly, Rework Assembly, QC Reports, Sticky Pads. Designed RESTful APIs with Node.js/Express.js, optimized MongoDB using indexing & validation, and built a responsive React.js front-end for seamless user experience.",
      techStack: "MongoDB, Express.js, React.js, Node.js",
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <SectionTitle title="Project Work" />
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card border-0 shadow-lg"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        borderLeft: "5px solid #00B4D8",
      }}>
      <div
        className="card-header border-0 text-white py-3"
        style={{ backgroundColor: "#00B4D8" }}>
        <h5 className="card-title mb-0 fw-bold">{project.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text fs-6">{project.description}</p>
        <div
          className="mt-3 p-3 rounded"
          style={{ backgroundColor: "#E1F5FE" }}>
          <strong>Tech Stack:</strong> {project.techStack}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
