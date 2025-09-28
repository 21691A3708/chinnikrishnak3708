// // components/HeroSection.jsx
// import React from "react";

// const HeroSection = ({ displayText }) => {
//   return (
//     <section
//       id="home"
//       className="container-fluid text-white d-flex align-items-center"
//       style={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(135deg, #0D47A1 0%, #1976D2 50%, #42A5F5 100%)",
//         paddingTop: "70px",
//       }}>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-6 text-center text-md-start">
//             <h1 className="display-4 fw-bold mb-3" style={{ color: "#FFD700" }}>
//               Hello, I'm
//             </h1>
//             <h1
//               className="display-3 fw-bolder mb-4"
//               style={{
//                 color: "#FFFFFF",
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//               }}>
//               {displayText}
//               <span style={{ color: "#FFD700" }}>|</span>
//             </h1>
//             <p className="lead fs-5 mb-4" style={{ color: "#E3F2FD" }}>
//               A passionate MERN Full Stack Developer with expertise in building
//               scalable and efficient web applications.
//             </p>
//             <CTAButton />
//           </div>
//           <div className="col-md-6 text-center mt-4 mt-md-0">
//             <ProfileImage />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const CTAButton = () => {
//   return (
//     <a
//       href="#experience"
//       className="btn btn-lg mt-3 fw-bold px-4 py-2"
//       style={{
//         background: "linear-gradient(45deg, #FFD700, #FFC400)",
//         color: "#0D47A1",
//         border: "none",
//         borderRadius: "50px",
//         boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
//         transition: "all 0.3s ease",
//       }}
//       onMouseOver={(e) => {
//         e.target.style.transform = "translateY(-3px)";
//         e.target.style.boxShadow = "0 6px 20px rgba(255, 215, 0, 0.4)";
//       }}
//       onMouseOut={(e) => {
//         e.target.style.transform = "translateY(0)";
//         e.target.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.3)";
//       }}>
//       View My Work
//     </a>
//   );
// };

// const ProfileImage = () => {
//   return (
//     <div
//       style={{
//         width: "350px",
//         height: "350px",
//         background: "linear-gradient(135deg, #FFD700 0%, #FFC400 100%)",
//         borderRadius: "50%",
//         margin: "auto",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#0D47A1",
//         boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)",
//         border: "5px solid rgba(255, 255, 255, 0.2)",
//       }}>
//       <div className="text-center">
//         <i
//           className="fas fa-user"
//           style={{ fontSize: "4rem", marginBottom: "1rem" }}></i>
//         <p className="fw-bold fs-5 m-0">Your Image Here</p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";

const HeroSection = ({ displayText }) => {
  return (
    <section
      id="home"
      className="container-fluid text-white d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0A192F 0%, #112240 50%, #1E3A8A 100%)",
        paddingTop: "80px",
      }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start">
            <h1
              className="display-5 fw-semibold mb-2"
              style={{ color: "#FBBF24", letterSpacing: "1px" }}>
              Hello, I'm
            </h1>
            <h1
              className="display-3 fw-bolder mb-3"
              style={{
                color: "#FFFFFF",
                textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                lineHeight: "1.2",
              }}>
              {displayText}
              <span style={{ color: "#FBBF24" }}>|</span>
            </h1>
            <p
              className="lead fs-5 mb-4"
              style={{
                color: "#E2E8F0",
                maxWidth: "500px",
                lineHeight: "1.6",
              }}>
              A passionate MERN Full Stack Developer who loves crafting modern,
              scalable, and efficient web applications with clean design and
              great user experience.
            </p>
            <CTAButton />
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Button with glass effect
const CTAButton = () => {
  return (
    <a
      href="#experience"
      className="btn btn-lg mt-3 fw-bold px-4 py-2"
      style={{
        background: "rgba(255, 191, 36, 0.9)",
        color: "#0A192F",
        border: "none",
        borderRadius: "50px",
        backdropFilter: "blur(6px)",
        boxShadow: "0 4px 20px rgba(251, 191, 36, 0.3)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.background = "rgba(251, 191, 36, 1)";
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow = "0 6px 25px rgba(251, 191, 36, 0.5)";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "rgba(255, 191, 36, 0.9)";
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 20px rgba(251, 191, 36, 0.3)";
      }}>
      View My Work
    </a>
  );
};

// Circular profile image with glowing border
const ProfileImage = () => {
  return (
    <div
      style={{
        width: "320px",
        height: "320px",
        background: "linear-gradient(145deg, #FBBF24, #FACC15)",
        borderRadius: "50%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0A192F",
        boxShadow: "0 10px 40px rgba(251, 191, 36, 0.3)",
        border: "6px solid rgba(255, 255, 255, 0.15)",
        transition: "all 0.4s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow = "0 12px 50px rgba(251, 191, 36, 0.5)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "0 10px 40px rgba(251, 191, 36, 0.3)";
      }}>
      <div className="text-center">
        <i
          className="fas fa-user"
          style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}></i>
        <p className="fw-bold fs-6 m-0">Your Image Here</p>
      </div>
    </div>
  );
};

export default HeroSection;
