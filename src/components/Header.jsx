import React, { useState, useEffect } from "react";

const Header = () => {
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

      // Track active section dynamically
      let currentSection = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop - 100 <= scrollPosition) {
          currentSection = item.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className="d-flex justify-content-between align-items-center fixed-top px-3 px-md-5"
      style={{
        height: isScrolled ? "10vh" : "12vh",
        backgroundColor: "rgba(13, 71, 161, 0.9)",
        color: "white",
        backdropFilter: "blur(12px)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
        zIndex: 1000,
        borderRadius: isScrolled ? "12px" : "0px",
        margin: isScrolled ? "0rem 1rem 0.5rem 1rem" : "0",
        transition: "all 0.3s ease",
      }}>
      <h1
        className="m-0"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          background: "linear-gradient(45deg, #FFD700, #FFECB3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: isScrolled ? "1.5rem" : "1.8rem",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
        }}>
        Portfolio
      </h1>

      <nav className="d-flex gap-3 gap-md-4">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            id={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            isScrolled={isScrolled}
          />
        ))}
      </nav>
    </header>
  );
};

const NavLink = ({ id, label, isActive, isScrolled }) => {
  return (
    <a
      href={`#${id}`}
      className="fw-medium text-decoration-none"
      style={{
        color: isActive ? "#FFD700" : "white",
        padding: isScrolled ? "0.4rem 0.8rem" : "0.5rem 1rem",
        borderRadius: "25px",
        fontSize: "1rem",
        fontWeight: 500,
        transition: "all 0.3s ease",
        backgroundColor: isActive ? "rgba(255, 215, 0, 0.15)" : "transparent",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "rgba(255, 215, 0, 0.25)";
        e.target.style.color = "#FFD700";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = isActive
          ? "rgba(255, 215, 0, 0.15)"
          : "transparent";
        e.target.style.color = isActive ? "#FFD700" : "white";
      }}>
      {label}
    </a>
  );
};

export default Header;
