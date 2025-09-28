// components/CertificationsSection.jsx
import React from "react";
import SectionTitle from "./SectionTitle";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Cybersecurity Essentials",
      issuer: "CISCO",
      year: "2024",
      icon: "fas fa-shield-alt",
      color: "#FF6B35",
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      year: "2024",
      icon: "fas fa-lock",
      color: "#00B4D8",
    },
    {
      title: "Business Analytics & Text Mining Modelling using Python",
      issuer: "NPTEL",
      year: "2024",
      icon: "fas fa-chart-line",
      color: "#7209B7",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-5"
      style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <SectionTitle title="Awards & Certifications" />
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationCard = ({ certification }) => {
  return (
    <div className="col-md-4">
      <div
        className="card h-100 border-0 shadow-sm text-center p-4"
        style={{
          borderRadius: "15px",
          transition: "all 0.3s ease",
          borderTop: `4px solid ${certification.color}`,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        }}>
        <i
          className={`${certification.icon} fa-3x mb-3`}
          style={{ color: certification.color }}></i>
        <h6 className="fw-bold" style={{ color: certification.color }}>
          {certification.title}
        </h6>
        <p className="text-muted mb-1">{certification.issuer}</p>
        <small className="text-muted">{certification.year}</small>
      </div>
    </div>
  );
};

export default CertificationsSection;
