import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Cybersecurity from "../assets/image_20142.jpg";
import Privacy from "../assets/Privacy and Security in Online Social Media_pages-to-jpg-0001.jpg";
import Business from "../assets/image_20142.jpg";
import Mern from "../assets/image_20142.jpg";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Cybersecurity Essentials",
      issuer: "CISCO",
      year: "2024",
      icon: "fas fa-shield-alt",
      color: "#FF6B35",
      certificateImage: Cybersecurity,
      details:
        "Completed Cisco Cybersecurity Essentials covering fundamental cybersecurity concepts.",
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      year: "2024",
      icon: "fas fa-lock",
      color: "#00B4D8",
      certificateImage: Privacy,
      details:
        "Completed course on online privacy and security measures in social media platforms.",
    },
    {
      title: "Business Analytics & Text Mining Modelling using Python",
      issuer: "NPTEL",
      year: "2024",
      icon: "fas fa-chart-line",
      color: "#7209B7",
      certificateImage: Business,
      details:
        "Learned Business Analytics & Text Mining Modelling using Python with practical projects.",
    },
    {
      title: "MERN Stack Development | Internship Completed",
      issuer: "VCreatech PVT LTD | MMRFIC",
      year: "2025",
      icon: "fas fa-laptop-code",
      color: "#0D47A1",
      certificateImage: Mern,
      details:
        "Completed internship in MERN stack development, building full stack web applications.",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  const handleClickOutside = (e) => {
    if (e.target.id === "modalOverlay") setSelectedCert(null);
  };

  return (
    <section
      id="certifications"
      className="py-5"
      style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container text-center">
        <SectionTitle title="Awards & Certifications" />

        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              style={{ width: "300px", height: "380px", cursor: "pointer" }}
              onClick={() => setSelectedCert(cert)}>
              <CertificationCard certification={cert} />
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div
          id="modalOverlay"
          onClick={handleClickOutside}
          className="position-fixed top-0 start-0 d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1050,
            opacity: 1,
            animation: "fadeIn 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div
            className="bg-white shadow-lg overflow-auto position-relative"
            style={{
              maxWidth: "600px",
              width: "90%",
              maxHeight: "90vh",
              borderRadius: "20px",
              padding: "1.5rem",
              transition: "all 0.3s ease-in-out",
              transform: "scale(1)",
              opacity: 1,
            }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "1.5rem",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#333",
              }}>
              &times;
            </button>

            {/* Certificate Image Centered */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}>
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                style={{
                  maxHeight: "300px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* Title & Details */}
            <h5
              style={{
                color: selectedCert.color,
                textAlign: "center",
                marginBottom: "0.5rem",
              }}>
              {selectedCert.title}
            </h5>
            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                marginBottom: "0.25rem",
              }}>
              {selectedCert.issuer}
            </p>
            <small
              style={{
                display: "block",
                textAlign: "center",
                color: "#6b7280",
                marginBottom: "1rem",
              }}>
              {selectedCert.year}
            </small>
            <p style={{ textAlign: "justify", color: "#374151" }}>
              {selectedCert.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const CertificationCard = ({ certification }) => (
  <div
    className="card shadow-lg text-center p-4 h-100 d-flex flex-column justify-content-between"
    style={{
      borderRadius: "20px",
      borderTop: `5px solid ${certification.color}`,
      transition: "all 0.4s ease",
    }}>
    <i
      className={`${certification.icon} fa-3x mb-3`}
      style={{ color: certification.color }}></i>
    <div>
      <h6 className="fw-bold" style={{ color: certification.color }}>
        {certification.title}
      </h6>
      <p className="text-muted mb-1">{certification.issuer}</p>
    </div>
    <span className="badge bg-secondary">{certification.year}</span>
  </div>
);

export default CertificationsSection;
