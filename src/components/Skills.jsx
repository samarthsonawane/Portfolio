// src/components/Skills.jsx
import React from "react";
import "../styles/skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiGit } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Git", icon: <SiGit />, color: "#F1502F" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ "--skill-color": skill.color }}
            data-aos="zoom-in"
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
