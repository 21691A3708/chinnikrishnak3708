// components/EducationSection.jsx
import React from "react";
import SectionTitle from "./SectionTitle";

const EducationSection = () => {
  const education = {
    degree: "B.Tech in Computer Science and Engineering (Cyber Security)",
    institution:
      "Madanapalle Institute of Technology and Sciences, Andhra Pradesh",
    period: "Nov 2021 - May 2025",
    cgpa: "8.29/10",
  };

  return (
    <section
      id="education"
      className="py-5"
      style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <SectionTitle title="Education Details" />
        <EducationCard education={education} />
      </div>
    </section>
  );
};

const EducationCard = ({ education }) => {
  return (
    <div
      className="card border-0 shadow-lg mx-auto"
      style={{
        maxWidth: "800px",
        borderRadius: "20px",
        overflow: "hidden",
        borderLeft: "5px solid #4CAF50",
      }}>
      <div
        className="card-header border-0 text-white py-4"
        style={{ backgroundColor: "#4CAF50" }}>
        <h5 className="card-title mb-1 fw-bold">{education.degree}</h5>
        <h6 className="card-subtitle mb-0" style={{ color: "#E8F5E8" }}>
          {education.institution} | {education.period}
        </h6>
      </div>
      <div className="card-body text-center py-4">
        <div
          className="bg-primary text-white d-inline-block px-4 py-2 rounded-pill fw-bold fs-5"
          style={{ backgroundColor: "#0D47A1 !important" }}>
          CGPA: {education.cgpa}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
