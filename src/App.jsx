// src/App.jsx
import React, { useEffect } from "react";
import './styles/background.css';

import "./styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 800 });

    const blobs = document.querySelectorAll(".bg-blob");
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let time = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX - window.innerWidth / 2;
      targetY = e.clientY - window.innerHeight / 2;
    };

    const animate = () => {
      time += 0.01;

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      blobs.forEach((blob, index) => {
        const floatX = Math.sin(time + index) * 20;
        const floatY = Math.cos(time + index) * 20;
        const speed = (index + 1) * 0.02;

        blob.style.transform = `translate(
          ${mouseX * speed + floatX}px,
          ${mouseY * speed + floatY}px
        )`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="portfolio-background">
        <div className="bg-blob blob1"></div>
        <div className="bg-blob blob2"></div>
        <div className="bg-blob blob3"></div>
      </div>

      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
