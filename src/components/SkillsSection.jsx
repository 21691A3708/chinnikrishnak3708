// components/SkillsSection.jsx
import React from "react";
import SectionTitle from "./SectionTitle";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "HTML", "CSS", "JavaScript"],
      color: "#FF6B35",
    },
    {
      title: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Express.js", "MongoDB"],
      color: "#00B4D8",
    },
    {
      title: "Concepts & Tools",
      items: ["REST APIs", "OOP", "DSA", "SQL", "Git"],
      color: "#7209B7",
    },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <SectionTitle title="Skills & Technologies" />
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ category }) => {
  return (
    <div className="col-md-4">
      <div
        className="card h-100 border-0 shadow-sm"
        style={{
          transition: "transform 0.3s ease",
          borderRadius: "15px",
          overflow: "hidden",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}>
        <div
          className="card-header border-0 text-white text-center py-3"
          style={{ backgroundColor: category.color }}>
          <h5 className="mb-0 fw-bold">{category.title}</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="list-group-item text-center py-3 border-0"
                style={{
                  backgroundColor: "transparent",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
