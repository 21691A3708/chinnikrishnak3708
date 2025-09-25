import React, { useEffect, useState } from "react";

const fullText = "Kundharupu Chinni Krishna";

function Index() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const typeEffect = () => {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeEffect, 80);
      }
    };
    const timer = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className="d-flex justify-content-between align-items-center px-4"
        style={{
          width: "100%",
          height: "10.9vh",
          backgroundColor: "#2c3e50",
          color: "white",
        }}>
        <h1
          className="m-0"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
          Portfolio
        </h1>
        <nav className="d-flex gap-3">
          <a href="#home" className="text-white text-decoration-none">
            Home
          </a>
          <a href="#skills" className="text-white text-decoration-none">
            Skills
          </a>
          <a href="#experience" className="text-white text-decoration-none">
            Experience
          </a>
          <a href="#projects" className="text-white text-decoration-none">
            Projects
          </a>
          <a href="#education" className="text-white text-decoration-none">
            Education
          </a>
          <a href="#certifications" className="text-white text-decoration-none">
            Certifications
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="container-fluid text-white d-flex align-items-center"
        style={{ minHeight: "89.1vh", backgroundColor: "#34495e" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-4 fw-bold">Hello, I'm</h1>
              <h1 className="display-3 fw-bolder text-primary">
                {displayText}
              </h1>
              <p className="lead">
                A passionate MERN Full Stack Developer with expertise in
                building scalable and efficient web applications.
              </p>
              <a href="#experience" className="btn btn-primary btn-lg mt-3">
                View My Work
              </a>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "#bdc3c7",
                  borderRadius: "50%",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2c3e50",
                }}>
                <p>Your Image Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-center">Languages</h5>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">Python</li>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-center">Frameworks</h5>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">React.js</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express.js</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-center">Databases & Concepts</h5>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">SQL</li>
                <li className="list-group-item">REST APIs</li>
                <li className="list-group-item">OOP</li>
                <li className="list-group-item">DSA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Work Experience</h2>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">MERN Full Stack Developer Intern</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                VCreatech Labs Pvt Ltd- MMRFIC, Bangalore | March 2025 - Oct
                2025
              </h6>
              <ul>
                <li>
                  Developed and Customized ERP modules, including Assembly
                  Management and Sticky pads, improving Performance,
                  Scalability, and operational visibility by 23%.
                </li>
                <li>
                  Enhanced ERP workflows resulting in a 20% increase in
                  operational efficiency and 30% reduction in manual processing
                  time across supply chain workflows.
                </li>
                <li>
                  Optimized API handling state management and database queries,
                  achieving an approximate 25% reduction in API latency.
                </li>
                <li>
                  Implemented ACID-compliant operations, indexing, and schema
                  validation in Mango DB, reducing query response time by ~22%.
                </li>
                <li>
                  Collaborated in an agile team environment, using Git for
                  version control and Postman for API testing.
                </li>
              </ul>
              <p className="card-text">
                <small className="text-muted">
                  Tech Stack: React JS, Node JS, Express JS, Mongo DB.
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Project Work</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Enterprise Resource Planning (2025)
              </h5>
              <p className="card-text">
                Developed a full stack ERP system with Assembly, Rework
                Assembly, Qc Reports, Sticky Pads Designed RESTful APIs with
                Node.js/Express.js, optimized MongoDB using indexing &
                validation, and built a responsive React.js front-end for
                seamless user experience.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Tech Stack: MongoDB, Express.js, React.js, Node.js.
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Education Details</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                B.Tech in Computer Science and Engineering (Cyber Security)
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Madanapalle Institute of Technology and Sciences, Andhra Pradesh
                | Nov 2021 - May 2025
              </h6>
              <p className="card-text">CGPA: 8.29/10</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Awards & Certifications</h2>
          <ul className="list-group">
            <li className="list-group-item">
              Completed course on “Cybersecurity Essentials”, from “CISCO”,
              (2024).
            </li>
            <li className="list-group-item">
              Completed course on “Privacy and Security in Online Social Media”,
              from “NPTEL”, (2024).
            </li>
            <li className="list-group-item">
              Completed course on “Business Analytics & Text Mining Modelling
              using Python”, from “NPTEL”, (2024).
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-primary">
                Kundharupu Chinni Krishna
              </h5>
              <p>
                A passionate MERN stack developer dedicated to building
                innovative and efficient web solutions.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-primary">
                Links
              </h5>
              <p>
                <a
                  href="#home"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  Home
                </a>
              </p>
              <p>
                <a
                  href="#skills"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  Skills
                </a>
              </p>
              <p>
                <a
                  href="#experience"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  Experience
                </a>
              </p>
              <p>
                <a
                  href="#projects"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  Projects
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-primary">
                Contact
              </h5>
              <p>
                <i className="fas fa-envelope mr-3"></i>{" "}
                chinnikrishna2004krishnak@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +91 7075669476
              </p>
              <p>
                <a
                  href="https://github.com/21691A3708/"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <i className="fab fa-github mr-3"></i> GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/chinnikrishna3708/"
                  className="text-white"
                  style={{ textDecoration: "none" }}>
                  {" "}
                  <i className="fab fa-linkedin mr-3"></i> LinkedIn
                </a>
              </p>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                {" "}
                &copy; 2025 All rights reserved by:
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong className="text-primary">
                    {" "}
                    Kundharupu Chinni Krishna
                  </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
