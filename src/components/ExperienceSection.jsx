// // components/ExperienceSection.jsx
// import React from "react";
// import SectionTitle from "./SectionTitle";

// const ExperienceSection = () => {
//   const experiences = [
//     {
//       title: "MERN Full Stack Developer Intern",
//       company: "VCreatech Labs Pvt Ltd- MMRFIC, Bangalore",
//       period: "March 2025 - Oct 2025",
//       achievements: [
//         "Developed and Customized ERP modules, including Assembly Management and Sticky pads, improving Performance, Scalability, and operational visibility by 23%.",
//         "Enhanced ERP workflows resulting in a 20% increase in operational efficiency and 30% reduction in manual processing time across supply chain workflows.",
//         "Optimized API handling state management and database queries, achieving an approximate 25% reduction in API latency.",
//         "Implemented ACID-compliant operations, indexing, and schema validation in MongoDB, reducing query response time by ~22%.",
//         "Collaborated in an agile team environment, using Git for version control and Postman for API testing.",
//       ],
//       techStack: "React JS, Node JS, Express JS, MongoDB",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="py-5"
//       style={{ backgroundColor: "#FFFFFF" }}>
//       <div className="container">
//         <SectionTitle title="Work Experience" />
//         {experiences.map((exp, index) => (
//           <ExperienceCard key={index} experience={exp} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const ExperienceCard = ({ experience }) => {
//   return (
//     <div
//       className="card border-0 shadow-lg mb-4"
//       style={{
//         borderRadius: "20px",
//         overflow: "hidden",
//         borderLeft: "5px solid #FFD700",
//       }}>
//       <div
//         className="card-header border-0 text-white py-3"
//         style={{ backgroundColor: "#0D47A1" }}>
//         <h5 className="card-title mb-1 fw-bold">{experience.title}</h5>
//         <h6 className="card-subtitle mb-0" style={{ color: "#FFD700" }}>
//           {experience.company} | {experience.period}
//         </h6>
//       </div>
//       <div className="card-body">
//         <ul className="list-unstyled">
//           {experience.achievements.map((item, index) => (
//             <li key={index} className="mb-2 d-flex align-items-start">
//               <i
//                 className="fas fa-check-circle mt-1 me-3"
//                 style={{ color: "#4CAF50" }}></i>
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//         <div
//           className="mt-3 p-3 rounded"
//           style={{ backgroundColor: "#E3F2FD" }}>
//           <strong>Tech Stack:</strong> {experience.techStack}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceSection;
import React from "react";
import SectionTitle from "./SectionTitle";
import { FaCheckCircle } from "react-icons/fa";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "MERN Full Stack Developer Intern",
      company: "VCreatech Labs Pvt Ltd",
      location: "MMRFIC, Bangalore",
      period: "March 2025 - Oct 2025",
      logo: "https://via.placeholder.com/80", // Replace with actual company logo
      achievements: [
        "Developed and Customized ERP modules, improving performance, scalability, and operational visibility by 23%.",
        "Enhanced ERP workflows, increasing efficiency by 20% and reducing manual processing time by 30%.",
        "Optimized API handling and database queries, reducing API latency by 25%.",
        "Implemented ACID-compliant operations, indexing, and schema validation in MongoDB, reducing query response time by ~22%.",
        "Collaborated in an agile team environment using Git and Postman for API testing.",
      ],
      techStack: ["React JS", "Node JS", "Express JS", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="py-5" style={{ background: "#f5f6fa" }}>
      <div className="container">
        <SectionTitle title="Work Experience" />

        <div className="row g-4 mt-4">
          {experiences.map((exp, index) => (
            <div key={index} className="col-md-12">
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-start bg-white shadow-lg rounded-4 p-4"
      style={{ transition: "all 0.3s ease" }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
      {/* Company Logo */}
      <div className="me-md-4 mb-3 mb-md-0 text-center">
        <img
          src={experience.logo}
          alt={experience.company}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "15px",
            border: "2px solid #FFD700",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-grow-1">
        {/* Title & Company */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2">
          <div>
            <h5 style={{ color: "#0D47A1", fontWeight: 700 }}>
              {experience.title}
            </h5>
            <h6
              style={{ color: "#FFB800", fontWeight: 500, fontSize: "0.9rem" }}>
              {experience.company} | {experience.location}
            </h6>
          </div>
          <span
            className="badge"
            style={{
              background: "#E3F2FD",
              color: "#0D47A1",
              padding: "0.4rem 0.8rem",
              borderRadius: "20px",
              fontWeight: 500,
            }}>
            {experience.period}
          </span>
        </div>

        {/* Achievements */}
        <ul className="list-unstyled mt-3">
          {experience.achievements.map((item, idx) => (
            <li
              key={idx}
              className="d-flex align-items-start mb-2"
              style={{ gap: "0.5rem", color: "#1e293b" }}>
              <FaCheckCircle color="#4CAF50" size={18} className="mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mt-3 d-flex flex-wrap gap-2">
          {experience.techStack.map((tech, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#FFE082",
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

export default ExperienceSection;
