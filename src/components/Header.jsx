// components/Header.jsx
import React from "react";

const Header = () => {
  const navItems = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certifications",
  ];

  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 fixed-top"
      style={{
        height: "70px",
        backgroundColor: "rgba(13, 71, 161, 0.95)",
        color: "white",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}>
      <h1
        className="m-0"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          background: "linear-gradient(45deg, #FFD700, #FFECB3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "1.8rem",
        }}>
        Portfolio
      </h1>
      <nav className="d-flex gap-4">
        {navItems.map((item) => (
          <NavLink key={item} item={item} />
        ))}
      </nav>
    </header>
  );
};

const NavLink = ({ item }) => {
  return (
    <a
      href={`#${item.toLowerCase()}`}
      className="text-white text-decoration-none fw-medium"
      style={{
        padding: "8px 12px",
        borderRadius: "6px",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.transform = "translateY(0)";
      }}>
      {item}
    </a>
  );
};

export default Header;
