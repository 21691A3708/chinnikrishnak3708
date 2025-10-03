import React, { useState, useEffect } from "react";
// import MyPhoto from "../assets/IMG_20250510_154235.jpg";
import MyPhoto from "../assets/image_20142.jpg";
// import MyPhoto from "../assets/thired photo.jpg";

// ==================== TYPEWRITER ====================
const TypewriterText = ({ texts, speed = 120, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) setIndex(0);

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed
    );

    setDisplayText(texts[index].substring(0, subIndex));
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, delay]);

  return (
    <span style={{ color: "#F59E0B" }}>
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

// ==================== CTA BUTTON ====================
const CTAButton = () => (
  <a
    href="#experience"
    className="btn btn-lg mt-3 fw-bold px-4 py-2"
    style={{
      background: "#F59E0B",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "50px",
      backdropFilter: "blur(6px)",
      boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#D97706";
      e.target.style.transform = "translateY(-3px)";
      e.target.style.boxShadow = "0 6px 25px rgba(245, 158, 11, 0.5)";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "#F59E0B";
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow = "0 4px 20px rgba(245, 158, 11, 0.3)";
    }}>
    View My Work
  </a>
);

// ==================== PROFILE IMAGE ====================
const ProfileImage = () => (
  <div
    style={{
      width: "320px",
      height: "320px",
      background: "linear-gradient(145deg, #FFF7E0, #FFE08A)",
      borderRadius: "50%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#1E293B",
      boxShadow: "0 10px 40px rgba(245, 158, 11, 0.2)",
      border: "6px solid rgba(0, 0, 0, 0.05)",
      transition: "all 0.4s ease",
      transform: "scale(0.9)",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 12px 50px rgba(245, 158, 11, 0.4)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 10px 40px rgba(245, 158, 11, 0.2)";
    }}>
    <img
      src={MyPhoto}
      alt="Profile"
      className="rounded-circle"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "-10% 30%",
      }}
    />
  </div>
);

// ==================== NAV LINK ====================
const NavLink = ({ id, label, isActive }) => (
  <a
    href={`#${id}`}
    className="fw-medium text-decoration-none position-relative"
    style={{
      color: isActive ? "#F59E0B" : "#334155",
      padding: "0.4rem 0.8rem",
      fontSize: "1rem",
      fontWeight: 500,
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.color = "#F59E0B")}
    onMouseOut={(e) =>
      (e.target.style.color = isActive ? "#F59E0B" : "#334155")
    }>
    {label}
    <span
      style={{
        display: "block",
        height: "2px",
        width: isActive ? "100%" : "0",
        background: "#F59E0B",
        transition: "width 0.3s ease",
        marginTop: "4px",
      }}></span>
  </a>
);

// ==================== HERO SECTION (FULL) ====================
const HeroSection = ({ displayText }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      let currentSection = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop - 120 <= scrollPosition) {
          currentSection = item.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const roles = [
    "MERN Full Stack Developer | Problem Solver | Tech Explorer | Research & Development",
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="d-flex justify-content-between align-items-center fixed-top px-3 px-md-5"
        style={{
          height: isScrolled ? "9vh" : "11vh",
          background: "rgba(255, 255, 255, 0.95)",
          color: "#1E293B",
          backdropFilter: "blur(12px)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
          zIndex: 1000,
          borderRadius: isScrolled ? "12px" : "3px",
          margin: isScrolled ? "0 5rem" : "0",
          transition: "all 0.3s ease",
        }}>
        {/* Brand */}
        <h1
          className="m-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            background: "linear-gradient(45deg, #F59E0B, #FACC15)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            fontSize: isScrolled ? "1.4rem" : "1.8rem",
            letterSpacing: "1px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}>
          Portfolio
        </h1>

        {/* Navigation */}
        <nav className="d-flex gap-3 gap-md-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={activeSection === item.id}
            />
          ))}
        </nav>
      </header>

      {/* HERO CONTENT */}
      <section
        id="home"
        className="container-fluid d-flex align-items-center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #F3F4F6 100%)",
          paddingTop: "80px",
          color: "#1E293B",
        }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <ProfileImage />
            </div>

            {/* Right Content (UPDATED) */}
            <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
              <h4
                className="fw-semibold mb-2"
                style={{
                  fontSize: "1.5rem",
                  color: "#F59E0B",
                  letterSpacing: "1px",
                }}>
                Hello, I'm
              </h4>

              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "2.8rem",
                  color: "#1E293B",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.05)",
                  lineHeight: "1.2",
                }}>
                {displayText}
              </h1>

              <h2
                className="fw-medium mb-4"
                style={{
                  fontSize: "1.25rem",
                  color: "#475569",
                }}>
                <TypewriterText texts={roles} />
              </h2>

              <CTAButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
