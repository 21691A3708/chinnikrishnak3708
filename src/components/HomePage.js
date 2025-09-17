import React, { useEffect, useState } from "react";
function HomePage() {
    const fullText = "K. Chinni Krishna";
    const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        let isCancelled = false;

        async function typeWriter() {
            while (!isCancelled) {
                // Reset before typing starts
                setDisplayText("");

                // Type one character at a time
                for (let i = 0; i < fullText.length; i++) {
                    if (isCancelled) return;
                    setDisplayText((prev) => prev + fullText[i]);
                    await new Promise((resolve) => setTimeout(resolve, 200)); // 200ms per character
                }

                // Wait before restarting
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }

        typeWriter();

        return () => {
            isCancelled = true; // cleanup on unmount
        };
    }, []);
    return (
        <>
            <section className="container-full mt-4  p-4 rounded text-white text-center justify-content-center d-flex flex-column" >
                <div className="rounded-circle bg-danger">
                    <h1>Welcome to the {displayText}</h1>
                    <div className="w-100 h-25">
                        <p>This is the main landing page of the application.</p>
                    </div>
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

export default HomePage;
