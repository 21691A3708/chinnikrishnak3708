// // components/ProjectsSection.jsx
// import React from "react";
// import SectionTitle from "./SectionTitle";

// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Enterprise Resource Planning (2025)",
//       description:
//         "Developed a full stack ERP system with Assembly, Rework Assembly, QC Reports, Sticky Pads. Designed RESTful APIs with Node.js/Express.js, optimized MongoDB using indexing & validation, and built a responsive React.js front-end for seamless user experience.",
//       techStack: "MongoDB, Express.js, React.js, Node.js",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-5"
//       style={{ backgroundColor: "#F5F5F5" }}>
//       <div className="container">
//         <SectionTitle title="Project Work" />
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ project }) => {
//   return (
//     <div
//       className="card border-0 shadow-lg"
//       style={{
//         borderRadius: "20px",
//         overflow: "hidden",
//         borderLeft: "5px solid #00B4D8",
//       }}>
//       <div
//         className="card-header border-0 text-white py-3"
//         style={{ backgroundColor: "#00B4D8" }}>
//         <h5 className="card-title mb-0 fw-bold">{project.title}</h5>
//       </div>
//       <div className="card-body">
//         <p className="card-text fs-6">{project.description}</p>
//         <div
//           className="mt-3 p-3 rounded"
//           style={{ backgroundColor: "#E1F5FE" }}>
//           <strong>Tech Stack:</strong> {project.techStack}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsSection;
import React from "react";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning (2025)",
      description:
        "Developed a full stack ERP system with Assembly, Rework Assembly, QC Reports, Sticky Pads. Designed RESTful APIs with Node.js/Express.js, optimized MongoDB using indexing & validation, and built a responsive React.js front-end for seamless user experience.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image:
        "https://c8.alamy.com/comp/2J52ABW/erp-enterprise-resource-planning-industry-production-productivity-and-company-enhancement-vector-stock-illustration-2J52ABW.jpg", // Replace with real screenshot
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
