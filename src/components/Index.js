// import React, { useEffect, useState } from "react";

// const fullText = "Kundharupu Chinni Krishna";

// function Index() {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let charIndex = 0;
//     const typeEffect = () => {
//       if (charIndex < fullText.length) {
//         setDisplayText(fullText.slice(0, charIndex + 1));
//         charIndex++;
//         setTimeout(typeEffect, 80);
//       }
//     };
//     const timer = setTimeout(typeEffect, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* Header */}
//       <header
//         className="d-flex justify-content-between align-items-center px-4 fixed-top"
//         style={{
//           height: "70px",
//           backgroundColor: "rgba(13, 71, 161, 0.95)",
//           color: "white",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//           zIndex: 1000,
//         }}>
//         <h1
//           className="m-0"
//           style={{
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: 700,
//             background: "linear-gradient(45deg, #FFD700, #FFECB3)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontSize: "1.8rem",
//           }}>
//           Portfolio
//         </h1>
//         <nav className="d-flex gap-4">
//           {[
//             "Home",
//             "Skills",
//             "Experience",
//             "Projects",
//             "Education",
//             "Certifications",
//           ].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-white text-decoration-none fw-medium"
//               style={{
//                 padding: "8px 12px",
//                 borderRadius: "6px",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
//                 e.target.style.transform = "translateY(-2px)";
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.backgroundColor = "transparent";
//                 e.target.style.transform = "translateY(0)";
//               }}>
//               {item}
//             </a>
//           ))}
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="container-fluid text-white d-flex align-items-center"
//         style={{
//           minHeight: "100vh",
//           background:
//             "linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #42A5F5 100%)",
//           paddingTop: "70px",
//         }}>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 text-center text-md-start">
//               <h1
//                 className="display-4 fw-bold mb-3"
//                 style={{ color: "#FFD700" }}>
//                 Hello, I'm
//               </h1>
//               <h1
//                 className="display-3 fw-bolder mb-4"
//                 style={{
//                   color: "#FFFFFF",
//                   textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                 }}>
//                 {displayText}
//                 <span style={{ color: "#FFD700" }}>|</span>
//               </h1>
//               <p className="lead fs-5 mb-4" style={{ color: "#E3F2FD" }}>
//                 A passionate MERN Full Stack Developer with expertise in
//                 building scalable and efficient web applications.
//               </p>
//               <a
//                 href="#experience"
//                 className="btn btn-lg mt-3 fw-bold px-4 py-2"
//                 style={{
//                   background: "linear-gradient(45deg, #FFD700, #FFC400)",
//                   color: "#0D47A1",
//                   border: "none",
//                   borderRadius: "50px",
//                   boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.transform = "translateY(-3px)";
//                   e.target.style.boxShadow =
//                     "0 6px 20px rgba(255, 215, 0, 0.4)";
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   e.target.style.boxShadow =
//                     "0 4px 15px rgba(255, 215, 0, 0.3)";
//                 }}>
//                 View My Work
//               </a>
//             </div>
//             <div className="col-md-6 text-center mt-4 mt-md-0">
//               <div
//                 style={{
//                   width: "350px",
//                   height: "350px",
//                   background:
//                     "linear-gradient(135deg, #FFD700 0%, #FFC400 100%)",
//                   borderRadius: "50%",
//                   margin: "auto",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#0D47A1",
//                   boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)",
//                   border: "5px solid rgba(255, 255, 255, 0.2)",
//                 }}>
//                 <div className="text-center">
//                   <i
//                     className="fas fa-user"
//                     style={{ fontSize: "4rem", marginBottom: "1rem" }}></i>
//                   <p className="fw-bold fs-5 m-0">Your Image Here</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section
//         id="skills"
//         className="py-5"
//         style={{ backgroundColor: "#F5F5F5" }}>
//         <div className="container">
//           <h2
//             className="text-center mb-5 fw-bold display-5"
//             style={{ color: "#0D47A1" }}>
//             Skills & Technologies
//           </h2>
//           <div className="row g-4">
//             {[
//               {
//                 title: "Programming Languages",
//                 items: ["Python", "Java", "HTML", "CSS", "JavaScript"],
//                 color: "#FF6B35",
//               },
//               {
//                 title: "Frameworks & Libraries",
//                 items: ["React.js", "Node.js", "Express.js", "MongoDB"],
//                 color: "#00B4D8",
//               },
//               {
//                 title: "Concepts & Tools",
//                 items: ["REST APIs", "OOP", "DSA", "SQL", "Git"],
//                 color: "#7209B7",
//               },
//             ].map((category, index) => (
//               <div key={index} className="col-md-4">
//                 <div
//                   className="card h-100 border-0 shadow-sm"
//                   style={{
//                     transition: "transform 0.3s ease",
//                     borderRadius: "15px",
//                     overflow: "hidden",
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.transform = "translateY(-10px)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                   }}>
//                   <div
//                     className="card-header border-0 text-white text-center py-3"
//                     style={{ backgroundColor: category.color }}>
//                     <h5 className="mb-0 fw-bold">{category.title}</h5>
//                   </div>
//                   <div className="card-body">
//                     <ul className="list-group list-group-flush">
//                       {category.items.map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="list-group-item text-center py-3 border-0"
//                           style={{
//                             backgroundColor: "transparent",
//                             fontSize: "1.1rem",
//                             fontWeight: "500",
//                           }}>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section
//         id="experience"
//         className="py-5"
//         style={{ backgroundColor: "#FFFFFF" }}>
//         <div className="container">
//           <h2
//             className="text-center mb-5 fw-bold display-5"
//             style={{ color: "#0D47A1" }}>
//             Work Experience
//           </h2>
//           <div
//             className="card border-0 shadow-lg mb-4"
//             style={{
//               borderRadius: "20px",
//               overflow: "hidden",
//               borderLeft: "5px solid #FFD700",
//             }}>
//             <div
//               className="card-header border-0 text-white py-3"
//               style={{ backgroundColor: "#0D47A1" }}>
//               <h5 className="card-title mb-1 fw-bold">
//                 MERN Full Stack Developer Intern
//               </h5>
//               <h6 className="card-subtitle mb-0" style={{ color: "#FFD700" }}>
//                 VCreatech Labs Pvt Ltd- MMRFIC, Bangalore | March 2025 - Oct
//                 2025
//               </h6>
//             </div>
//             <div className="card-body">
//               <ul className="list-unstyled">
//                 {[
//                   "Developed and Customized ERP modules, including Assembly Management and Sticky pads, improving Performance, Scalability, and operational visibility by 23%.",
//                   "Enhanced ERP workflows resulting in a 20% increase in operational efficiency and 30% reduction in manual processing time across supply chain workflows.",
//                   "Optimized API handling state management and database queries, achieving an approximate 25% reduction in API latency.",
//                   "Implemented ACID-compliant operations, indexing, and schema validation in MongoDB, reducing query response time by ~22%.",
//                   "Collaborated in an agile team environment, using Git for version control and Postman for API testing.",
//                 ].map((item, index) => (
//                   <li key={index} className="mb-2 d-flex align-items-start">
//                     <i
//                       className="fas fa-check-circle mt-1 me-3"
//                       style={{ color: "#4CAF50" }}></i>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div
//                 className="mt-3 p-3 rounded"
//                 style={{ backgroundColor: "#E3F2FD" }}>
//                 <strong>Tech Stack:</strong> React JS, Node JS, Express JS,
//                 MongoDB
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="py-5"
//         style={{ backgroundColor: "#F5F5F5" }}>
//         <div className="container">
//           <h2
//             className="text-center mb-5 fw-bold display-5"
//             style={{ color: "#0D47A1" }}>
//             Project Work
//           </h2>
//           <div
//             className="card border-0 shadow-lg"
//             style={{
//               borderRadius: "20px",
//               overflow: "hidden",
//               borderLeft: "5px solid #00B4D8",
//             }}>
//             <div
//               className="card-header border-0 text-white py-3"
//               style={{ backgroundColor: "#00B4D8" }}>
//               <h5 className="card-title mb-0 fw-bold">
//                 Enterprise Resource Planning (2025)
//               </h5>
//             </div>
//             <div className="card-body">
//               <p className="card-text fs-6">
//                 Developed a full stack ERP system with Assembly, Rework
//                 Assembly, QC Reports, Sticky Pads. Designed RESTful APIs with
//                 Node.js/Express.js, optimized MongoDB using indexing &
//                 validation, and built a responsive React.js front-end for
//                 seamless user experience.
//               </p>
//               <div
//                 className="mt-3 p-3 rounded"
//                 style={{ backgroundColor: "#E1F5FE" }}>
//                 <strong>Tech Stack:</strong> MongoDB, Express.js, React.js,
//                 Node.js
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section
//         id="education"
//         className="py-5"
//         style={{ backgroundColor: "#FFFFFF" }}>
//         <div className="container">
//           <h2
//             className="text-center mb-5 fw-bold display-5"
//             style={{ color: "#0D47A1" }}>
//             Education Details
//           </h2>
//           <div
//             className="card border-0 shadow-lg mx-auto"
//             style={{
//               maxWidth: "800px",
//               borderRadius: "20px",
//               overflow: "hidden",
//               borderLeft: "5px solid #4CAF50",
//             }}>
//             <div
//               className="card-header border-0 text-white py-4"
//               style={{ backgroundColor: "#4CAF50" }}>
//               <h5 className="card-title mb-1 fw-bold">
//                 B.Tech in Computer Science and Engineering (Cyber Security)
//               </h5>
//               <h6 className="card-subtitle mb-0" style={{ color: "#E8F5E8" }}>
//                 Madanapalle Institute of Technology and Sciences, Andhra Pradesh
//                 | Nov 2021 - May 2025
//               </h6>
//             </div>
//             <div className="card-body text-center py-4">
//               <div
//                 className="bg-primary text-white d-inline-block px-4 py-2 rounded-pill fw-bold fs-5"
//                 style={{ backgroundColor: "#0D47A1 !important" }}>
//                 CGPA: 8.29/10
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certifications Section */}
//       <section
//         id="certifications"
//         className="py-5"
//         style={{ backgroundColor: "#F5F5F5" }}>
//         <div className="container">
//           <h2
//             className="text-center mb-5 fw-bold display-5"
//             style={{ color: "#0D47A1" }}>
//             Awards & Certifications
//           </h2>
//           <div className="row g-4">
//             {[
//               {
//                 title: "Cybersecurity Essentials",
//                 issuer: "CISCO",
//                 year: "2024",
//                 icon: "fas fa-shield-alt",
//                 color: "#FF6B35",
//               },
//               {
//                 title: "Privacy and Security in Online Social Media",
//                 issuer: "NPTEL",
//                 year: "2024",
//                 icon: "fas fa-lock",
//                 color: "#00B4D8",
//               },
//               {
//                 title:
//                   "Business Analytics & Text Mining Modelling using Python",
//                 issuer: "NPTEL",
//                 year: "2024",
//                 icon: "fas fa-chart-line",
//                 color: "#7209B7",
//               },
//             ].map((cert, index) => (
//               <div key={index} className="col-md-4">
//                 <div
//                   className="card h-100 border-0 shadow-sm text-center p-4"
//                   style={{
//                     borderRadius: "15px",
//                     transition: "all 0.3s ease",
//                     borderTop: `4px solid ${cert.color}`,
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.transform = "translateY(-5px)";
//                     e.currentTarget.style.boxShadow =
//                       "0 10px 25px rgba(0,0,0,0.1)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow =
//                       "0 4px 6px rgba(0,0,0,0.1)";
//                   }}>
//                   <i
//                     className={`${cert.icon} fa-3x mb-3`}
//                     style={{ color: cert.color }}></i>
//                   <h6 className="fw-bold" style={{ color: cert.color }}>
//                     {cert.title}
//                   </h6>
//                   <p className="text-muted mb-1">{cert.issuer}</p>
//                   <small className="text-muted">{cert.year}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         className="pt-5 pb-4"
//         style={{ backgroundColor: "#0D47A1", color: "white" }}>
//         <div className="container text-center text-md-left">
//           <div className="row text-center text-md-left">
//             <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
//               <h5
//                 className="text-uppercase mb-4 font-weight-bold"
//                 style={{ color: "#FFD700" }}>
//                 Kundharupu Chinni Krishna
//               </h5>
//               <p style={{ color: "#E3F2FD" }}>
//                 A passionate MERN stack developer dedicated to building
//                 innovative and efficient web solutions.
//               </p>
//             </div>

//             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//               <h5
//                 className="text-uppercase mb-4 font-weight-bold"
//                 style={{ color: "#FFD700" }}>
//                 Quick Links
//               </h5>
//               {[
//                 "Home",
//                 "Skills",
//                 "Experience",
//                 "Projects",
//                 "Education",
//                 "Certifications",
//               ].map((link) => (
//                 <p key={link}>
//                   <a
//                     href={`#${link.toLowerCase()}`}
//                     className="text-white text-decoration-none"
//                     style={{ transition: "color 0.3s ease" }}
//                     onMouseOver={(e) => (e.target.style.color = "#FFD700")}
//                     onMouseOut={(e) => (e.target.style.color = "white")}>
//                     {link}
//                   </a>
//                 </p>
//               ))}
//             </div>

//             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//               <h5
//                 className="text-uppercase mb-4 font-weight-bold"
//                 style={{ color: "#FFD700" }}>
//                 Contact Me
//               </h5>
//               <p>
//                 <i
//                   className="fas fa-envelope mr-3"
//                   style={{ color: "#FFD700" }}></i>
//                 <span style={{ color: "#E3F2FD" }}>
//                   chinnikrishna2004krishnak@gmail.com
//                 </span>
//               </p>
//               <p>
//                 <i
//                   className="fas fa-phone mr-3"
//                   style={{ color: "#FFD700" }}></i>
//                 <span style={{ color: "#E3F2FD" }}>+91 7075669476</span>
//               </p>
//               <p>
//                 <a
//                   href="https://github.com/21691A3708/"
//                   className="text-white text-decoration-none"
//                   style={{ transition: "color 0.3s ease" }}
//                   onMouseOver={(e) => (e.target.style.color = "#FFD700")}
//                   onMouseOut={(e) => (e.target.style.color = "white")}>
//                   <i
//                     className="fab fa-github mr-3"
//                     style={{ color: "#FFD700" }}></i>{" "}
//                   GitHub
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="https://www.linkedin.com/in/chinnikrishna3708/"
//                   className="text-white text-decoration-none"
//                   style={{ transition: "color 0.3s ease" }}
//                   onMouseOver={(e) => (e.target.style.color = "#FFD700")}
//                   onMouseOut={(e) => (e.target.style.color = "white")}>
//                   <i
//                     className="fab fa-linkedin mr-3"
//                     style={{ color: "#FFD700" }}></i>{" "}
//                   LinkedIn
//                 </a>
//               </p>
//             </div>
//           </div>

//           <hr style={{ borderColor: "#1976D2", margin: "2rem 0" }} />

//           <div className="row align-items-center">
//             <div className="col-md-7 col-lg-8">
//               <p style={{ color: "#E3F2FD" }}>
//                 &copy; 2025 All rights reserved by:{" "}
//                 <strong style={{ color: "#FFD700" }}>
//                   Kundharupu Chinni Krishna
//                 </strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Add Font Awesome for icons */}
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
//       />
//     </>
//   );
// }

// export default Index;
// Index.jsx
import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import Footer from "./Footer";

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
      <Header />
      <HeroSection displayText={displayText} />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <Footer />

      {/* Add Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </>
  );
}

export default Index;
