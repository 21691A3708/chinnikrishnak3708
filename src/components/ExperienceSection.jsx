// components/ExperienceSection.jsx
import React from "react";
import SectionTitle from "./SectionTitle";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "MERN Full Stack Developer Intern",
      company: "VCreatech Labs Pvt Ltd- MMRFIC, Bangalore",
      period: "March 2025 - Oct 2025",
      achievements: [
        "Developed and Customized ERP modules, including Assembly Management and Sticky pads, improving Performance, Scalability, and operational visibility by 23%.",
        "Enhanced ERP workflows resulting in a 20% increase in operational efficiency and 30% reduction in manual processing time across supply chain workflows.",
        "Optimized API handling state management and database queries, achieving an approximate 25% reduction in API latency.",
        "Implemented ACID-compliant operations, indexing, and schema validation in MongoDB, reducing query response time by ~22%.",
        "Collaborated in an agile team environment, using Git for version control and Postman for API testing.",
      ],
      techStack: "React JS, Node JS, Express JS, MongoDB",
    },
  ];

  return (
    <section
      id="experience"
      className="py-5"
      style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <SectionTitle title="Work Experience" />
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div
      className="card border-0 shadow-lg mb-4"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        borderLeft: "5px solid #FFD700",
      }}>
      <div
        className="card-header border-0 text-white py-3"
        style={{ backgroundColor: "#0D47A1" }}>
        <h5 className="card-title mb-1 fw-bold">{experience.title}</h5>
        <h6 className="card-subtitle mb-0" style={{ color: "#FFD700" }}>
          {experience.company} | {experience.period}
        </h6>
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          {experience.achievements.map((item, index) => (
            <li key={index} className="mb-2 d-flex align-items-start">
              <i
                className="fas fa-check-circle mt-1 me-3"
                style={{ color: "#4CAF50" }}></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div
          className="mt-3 p-3 rounded"
          style={{ backgroundColor: "#E3F2FD" }}>
          <strong>Tech Stack:</strong> {experience.techStack}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
