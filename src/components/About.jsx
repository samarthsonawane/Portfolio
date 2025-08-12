import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container" data-aos="fade-up">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I’m <span className="highlight">Your Name</span>, a passionate
            web developer specializing in creating modern, responsive, and
            user-friendly websites. I enjoy turning complex problems into
            elegant solutions with clean, efficient code.
          </p>
          <p>
            With skills in React, Node.js, and modern UI design, I aim to
            deliver high-quality digital experiences that not only look great
            but also perform exceptionally well.
          </p>
          <a
            href="/resume.pdf"
            className="about-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
