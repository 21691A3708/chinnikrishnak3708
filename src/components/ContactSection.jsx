import React from "react";
import SectionTitle from "./SectionTitle";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      icon: <FaEnvelope color="#FFD700" size={20} />,
      label: "Email",
      value: "chinnikrishna2004krishnak@gmail.com",
      url: "mailto:chinnikrishna2004krishnak@gmail.com",
    },
    {
      icon: <FaPhone color="#FFD700" size={20} />,
      label: "Phone",
      value: "+91 7075669476",
      url: "tel:+917075669476",
    },
    {
      icon: <FaGithub color="#FFD700" size={20} />,
      label: "GitHub",
      value: "github.com/21691A3708",
      url: "https://github.com/21691A3708/",
    },
    {
      icon: <FaLinkedin color="#FFD700" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/chinnikrishna3708",
      url: "https://www.linkedin.com/in/chinnikrishna3708/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#f5f6fa" }}>
      <div className="container">
        <SectionTitle title="Contact Me" />

        <div className="row justify-content-center mt-4">
          {/* Contact Info */}
          <div className="col-lg-6 col-md-8">
            <div className="bg-white shadow-lg rounded-4 p-4">
              {contacts.map((c, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center mb-3"
                  style={{ gap: "0.8rem" }}>
                  {c.icon}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    style={{
                      color: "#1E293B",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#0D47A1")}
                    onMouseOut={(e) => (e.target.style.color = "#1E293B")}>
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form (Optional) */}
          <div className="col-lg-6 col-md-8 mt-4 mt-lg-0">
            <div className="bg-white shadow-lg rounded-4 p-4">
              <h5
                className="mb-3"
                style={{ color: "#0D47A1", fontWeight: 600 }}>
                Send me a message
              </h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    backgroundColor: "#FFD700",
                    color: "#0D47A1",
                    fontWeight: "600",
                    borderRadius: "30px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#FFC107";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#FFD700";
                    e.target.style.transform = "translateY(0)";
                  }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
