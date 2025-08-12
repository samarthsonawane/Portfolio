import React from "react";
import "../styles/hero.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Samarth Sonawane</span></h1>
          <h2>Full Stack Developer | Problem Solver</h2>
          <p>
            I create modern, responsive, and visually appealing web applications.
            My focus is on performance, clean code, and intuitive user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
          <div className="hero-socials">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <img src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
