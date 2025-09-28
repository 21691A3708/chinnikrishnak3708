// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      className="pt-5 pb-4"
      style={{ backgroundColor: "#0D47A1", color: "white" }}>
      <div className="container text-center text-md-left">
        <FooterContent />
        <FooterDivider />
        <FooterCopyright />
      </div>
    </footer>
  );
};

const FooterContent = () => {
  const quickLinks = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certifications",
  ];

  return (
    <div className="row text-center text-md-left">
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5
          className="text-uppercase mb-4 font-weight-bold"
          style={{ color: "#FFD700" }}>
          Kundharupu Chinni Krishna
        </h5>
        <p style={{ color: "#E3F2FD" }}>
          A passionate MERN stack developer dedicated to building innovative and
          efficient web solutions.
        </p>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5
          className="text-uppercase mb-4 font-weight-bold"
          style={{ color: "#FFD700" }}>
          Quick Links
        </h5>
        {quickLinks.map((link) => (
          <FooterLink key={link} link={link} />
        ))}
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <ContactInfo />
      </div>
    </div>
  );
};

const FooterLink = ({ link }) => {
  return (
    <p>
      <a
        href={`#${link.toLowerCase()}`}
        className="text-white text-decoration-none"
        style={{ transition: "color 0.3s ease" }}
        onMouseOver={(e) => (e.target.style.color = "#FFD700")}
        onMouseOut={(e) => (e.target.style.color = "white")}>
        {link}
      </a>
    </p>
  );
};

const ContactInfo = () => {
  const contacts = [
    {
      icon: "fas fa-envelope mr-3",
      content: "chinnikrishna2004krishnak@gmail.com",
      isLink: false,
    },
    {
      icon: "fas fa-phone mr-3",
      content: "+91 7075669476",
      isLink: false,
    },
    {
      icon: "fab fa-github mr-3",
      content: "GitHub",
      url: "https://github.com/21691A3708/",
      isLink: true,
    },
    {
      icon: "fab fa-linkedin mr-3",
      content: "LinkedIn",
      url: "https://www.linkedin.com/in/chinnikrishna3708/",
      isLink: true,
    },
  ];

  return (
    <>
      <h5
        className="text-uppercase mb-4 font-weight-bold"
        style={{ color: "#FFD700" }}>
        Contact Me
      </h5>
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </>
  );
};

const ContactItem = ({ contact }) => {
  if (contact.isLink) {
    return (
      <p>
        <a
          href={contact.url}
          className="text-white text-decoration-none"
          style={{ transition: "color 0.3s ease" }}
          onMouseOver={(e) => (e.target.style.color = "#FFD700")}
          onMouseOut={(e) => (e.target.style.color = "white")}>
          <i className={contact.icon} style={{ color: "#FFD700" }}></i>{" "}
          {contact.content}
        </a>
      </p>
    );
  }

  return (
    <p>
      <i className={contact.icon} style={{ color: "#FFD700" }}></i>
      <span style={{ color: "#E3F2FD" }}>{contact.content}</span>
    </p>
  );
};

const FooterDivider = () => (
  <hr style={{ borderColor: "#1976D2", margin: "2rem 0" }} />
);

const FooterCopyright = () => (
  <div className="row align-items-center">
    <div className="col-md-7 col-lg-8">
      <p style={{ color: "#E3F2FD" }}>
        &copy; 2025 All rights reserved by:{" "}
        <strong style={{ color: "#FFD700" }}>Kundharupu Chinni Krishna</strong>
      </p>
    </div>
  </div>
);

export default Footer;
