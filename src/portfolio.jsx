// portfolio.jsx
import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <img src="/profile.jpg" alt="Samarth Sonawane" className="profile" />
          <h1>Samarth Sonawane</h1>
          <p className="title">Full Stack Developer | Java | React | Spring Boot</p>
          <a className="btn" href="/Samarth_Resume.pdf" download>Download Resume</a>
        </div>
      </header>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I’m Samarth, a final-year engineering student at PREC Loni. I enjoy building full stack apps and exploring
          cloud-based solutions. I love turning ideas into real web products.
        </p>
      </section>

      {/* Skills */}
      <section className="section dark">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>CSS</span>
          <span>MySQL</span>
          <span>AWS</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Smart Home Automation</h3>
            <p>IoT system to control appliances using AWS IoT, ESP32, and web dashboard.</p>
          </div>
          <div className="card">
            <h3>NotesHub</h3>
            <p>Personal notes manager app using React and Firebase for students.</p>
          </div>
          <div className="card">
            <h3>OMR Recognition</h3>
            <p>Detects answers from scanned OMR sheets using Python and ML.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section dark">
        <h2>Contact Me</h2>
        <p>Email: samarthsonawane2411@gmail.com</p>
        <div className="socials">
          <a href="https://github.com/samarthsonawane2411" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/samarthsonawane2411" target="_blank">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">&copy; {new Date().getFullYear()} Samarth Sonawane</footer>
    </div>
  );
}
