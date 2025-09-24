import React, { useEffect, useState } from "react";
const fullText = "K. Chinni Krishna";
function Index() {

    const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        let isCancelled = false;
        let charIndex = 0;
        let typing = true;

        function typeEffect() {
            if (typing) {
                setDisplayText(fullText.slice(0, charIndex + 1));
                charIndex++;
                if (charIndex === fullText.length) {
                    typing = false;
                    setTimeout(typeEffect, 1500); // Pause before deleting
                    return;
                }
            } else {
                setDisplayText(fullText.slice(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    typing = true;
                }
            }
            setTimeout(typeEffect, typing ? 80 : 50);
        }

        const timer = setTimeout(typeEffect, 1000); // Initial delay

        return () => {
            clearTimeout(timer); // Cleanup
            isCancelled = true;
        };
    }, []);
    return (
        <>
            <header
                className="d-flex justify-content-equaly align-items-center px-4"
                style={{
                    width: "100%",
                    height: "10.9vh",
                    backgroundColor: "rgba(79, 89, 163, 1)",
                    color: "white",
                }}
            >
                {/* Left Side - Logo/Heading */}
                <h1 className="m-0" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                    Protipolia
                </h1>

                {/* Right Side - Navigation + Profile */}
                <div className="d-flex align-items-center gap-4">
                    <nav className="d-flex gap-3">
                        <a href="#home" className="text-white text-decoration-none">
                            Home
                        </a>
                        <a href="#about" className="text-white text-decoration-none">
                            About
                        </a>
                        <a href="#services" className="text-white text-decoration-none">
                            Services
                        </a>
                    </nav>

                </div>
            </header>

            <section
                className="container-fluid rounded text-white d-flex flex-column flex-md-row"
                style={{ minHeight: '89.1vh' }}
            >
                {/* Left Column */}
                <div className="flex-fill d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0">
                    <div
                        className="rounded-circle bg-danger d-flex flex-column align-items-center justify-content-center"
                        style={{ width: '500px', height: '500px' }}
                    >
                        <h1 className="text-center">
                            Welcome to<br />
                            {displayText}
                        </h1>
                        <p className="mt-2 text-center">This is the main landing page of the application.</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-fill d-flex align-items-center justify-content-center bg-info rounded">
                    <h1 className="text-center text-danger">Bottom half content Here</h1>
                </div>
            </section>


            <div>
                <h2 className="text-center mt-4">About Me</h2>
                <p className="text-center">I am K. Chinni Krishna, a passionate developer with expertise in React and web development.</p>
                <h4 className="text-center">Contact Information</h4>
                <p className="text-center">Email:
                    <a href="mailto:chinnikrishna@gmail.com" className="text-decoration-none text-primary" >chinnikrishna2004krishnak@gmail.com</a>
                </p>
                <p className="text-center">Phone: +91 9704083708</p>
                <p className="text-center">LinkedIn:
                    <a href="https://www.linkedin.com/in/chinnikrishna3708/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">K. Chinni Krishna</a>
                </p>
                <p className="text-center">GitHub:
                    <a href="https://github.com/21691A3708?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">GitHub Profile</a>
                </p>
                <p className="text-center">Portfolio:
                    <a href="https://chinnikrishnak3708.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">My Portfolio</a>
                </p>

            </div>
            <div>
                <h2 className="text-center mt-4">Skills</h2>
                <ul className="list-group list-group-flush text-center col-6 offset-3 mb-4 d-flex flex-row flex-wrap" >
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">HTML/CSS</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Git & GitHub</li>
                    <li className="list-group-item">Responsive Web Design</li>
                    <li className="list-group-item">Problem Solving</li>
                    <li className="list-group-item">Team Collaboration</li>
                    <li className="list-group-item">UI/UX Design Principles</li>
                    <li className="list-group-item">RESTful APIs</li>
                    {/* <li className="list-group-item">Version Control</li>
                    <li className="list-group-item">Debugging & Testing</li>
                    <li className="list-group-item">Continuous Learning</li>
                    <li className="list-group-item">Time Management</li>
                    <li className="list-group-item">Communication Skills</li>
                    <li className="list-group-item">Adaptability</li> */}
                    <li className="list-group-item">Creativity</li>
                    <li className="list-group-item">Project Management</li>
                    <li className="list-group-item">Critical Thinking</li>
                    <li className="list-group-item">Collaboration Tools (e.g., Slack, Trello)</li>
                    <li className="list-group-item">Performance Optimization</li>
                    {/* <li className="list-group-item">Web Accessibility Standards</li> */}
                    {/* <li className="list-group-item">Cloud Services (e.g., AWS, Firebase)</li> */}
                    <li className="list-group-item">Database Management (e.g., MongoDB, SQL)</li>
                    {/* <li className="list-group-item">WebSockets</li>

                    <li className="list-group-item">TypeScript</li> */}
                </ul>
            </div>
            <section className="text-center mt-4 mb-4">
                <h2>Connect with me on Social Media</h2>
                <a href="https://www.facebook.com/chinnikrishna3708" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none text-primary">Facebook</a>
                <a href="https://twitter.com/ChinniKrishna37" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none text-primary">Twitter</a>

                <a href="https://www.instagram.com/chinnikrishna3708/" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none text-primary">Instagram</a>
                <a href="https://www.linkedin.com/in/chinnikrishna3708/" target="_blank" rel="noopener noreferrer" className="mx-2 text-decoration-none text-primary">LinkedIn</a>
            </section >
            <footer className="bg-light text-center p-3">
                <p>&copy; 2025 K. Chinni Krishna. All rights reserved.</p>
            </footer>

        </>

    );
}

export default Index;
