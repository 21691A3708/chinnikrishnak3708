// components/HeroSection.jsx
import React from "react";

const HeroSection = ({ displayText }) => {
  return (
    <section
      id="home"
      className="container-fluid text-white d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #42A5F5 100%)",
        paddingTop: "70px",
      }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#FFD700" }}>
              Hello, I'm
            </h1>
            <h1
              className="display-3 fw-bolder mb-4"
              style={{
                color: "#FFFFFF",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}>
              {displayText}
              <span style={{ color: "#FFD700" }}>|</span>
            </h1>
            <p className="lead fs-5 mb-4" style={{ color: "#E3F2FD" }}>
              A passionate MERN Full Stack Developer with expertise in building
              scalable and efficient web applications.
            </p>
            <CTAButton />
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAButton = () => {
  return (
    <a
      href="#experience"
      className="btn btn-lg mt-3 fw-bold px-4 py-2"
      style={{
        background: "linear-gradient(45deg, #FFD700, #FFC400)",
        color: "#0D47A1",
        border: "none",
        borderRadius: "50px",
        boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow = "0 6px 20px rgba(255, 215, 0, 0.4)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.3)";
      }}>
      View My Work
    </a>
  );
};

const ProfileImage = () => {
  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        background: "linear-gradient(135deg, #FFD700 0%, #FFC400 100%)",
        borderRadius: "50%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0D47A1",
        boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)",
        border: "5px solid rgba(255, 255, 255, 0.2)",
      }}>
      <div className="text-center">
        <i
          className="fas fa-user"
          style={{ fontSize: "4rem", marginBottom: "1rem" }}></i>
        <p className="fw-bold fs-5 m-0">Your Image Here</p>
      </div>
    </div>
  );
};

export default HeroSection;
